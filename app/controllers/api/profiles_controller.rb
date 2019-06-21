class Api::ProfilesController < ApplicationController
  def index
    render json: User.random_profile(current_user.liked_profiles)
  end

  def show
    render json: Profile.find(params[:id])
  end

  def update
    current_user.liked_profiles << params[:id].to_i
    current_user.save
  end

  def my_friends
    render json: User.liked(current_user.liked_profiles)
  end

  def top_friends
    render json: User.top(current_user.top_profiles)
  end

  def posts
    render json: Profile.posts(params[:id])
  end
end
