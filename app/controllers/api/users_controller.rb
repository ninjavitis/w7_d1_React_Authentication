class Api::UsersController < ApplicationController
  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
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
  
end