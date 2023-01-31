class Api::V1::TweetsController < ApplicationController
  before_action :authenticate_user!, except: [:index]
  before_action :set_tweet, only: [:show, :edit, :update, :destroy]
  def index
    @tweets = Tweet.all
    render json: TweetSerializer.new(@tweets).serializable_hash.to_json    
  end

  def show
    render json: TweetSerializer.new(@tweet).serializable_hash.to_json
  end

  def new
    @tweet = current_user.tweets.new
  end

  def create
    @tweet = current_user.tweets.new(tweet_params)
    if @tweet.save
        ActionCable.server.broadcast "tweet_channel", { data: @tweet }
        render json: TweetSerializer.new(@tweet).serializable_hash.to_json, status: :created
    else
        render json: {error: @tweet.errors }, status: 422
    end
  end

  def edit; end

  def update
    if @tweet.update(tweet_params)
        render json: TweetSerializer.new(@tweet).serializable_hash.to_json
    else
        render json: {error: @tweet.errors }, status: 422
    end
  end

  def destroy
    if @tweet.destroy
      head :no_content
    else
        render json: {error: @tweet.errors }, status: 422
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body, :user_id)
  end

  def set_tweet
    @tweet = Tweet.find_by(id: params[:id])
  end
end
