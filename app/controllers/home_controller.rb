class HomeController < ApplicationController
  before_action :authenticate_user!, except: [:app]
  def index
  end

  def app
    @tweets = Tweet.all
  end
end
