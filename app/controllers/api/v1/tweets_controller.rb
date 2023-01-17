class Api::V1::TweetsController < ApplicationController
  protect_from_forgery with: :null_session
  def index
    tweets = Tweet.all
    render json: TweetSerializer.new(tweets).serializable_hash
  end

  def show
    tweet = Tweet.find_by(id: params[:id])
    render json: TweetSerializer.new(tweet).serializable_hash
  end

  def new
    tweet = Tweet.new
  end

  def create
    tweet = Tweet.new(tweet_params)
    if tweet.save
        render json: TweetSerializer.new(tweet).serializable_hash, status: :created
    else
        render json: {error: tweet.errors }, status: 422
    end
  end

  def edit; end

  def update
    tweet = Tweet.find_by(id: params[:id])
        if tweet.update(tweet_params)
            render json: TweetSerializer.new(tweet).serializable_hash
        else
            render json: {error: tweet.errors }, status: 422
        end
  end

  def destroy
    tweet = Tweet.find_by(id: params[:id])
    if tweet.destroy
      head :no_content
    else
        render json: {error: tweet.errors }, status: 422
    end
  end

  private

  def tweet_params
    params.require(:tweet).permit(:body, :user_id)
  end
end
