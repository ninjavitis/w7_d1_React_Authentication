class Api::PostsController < ApplicationController
  before_action :set_user
  before_action :set_post, only:[:index, :show, :update, :destroy]
  
  def index
    render json: @user.posts
  end

  def show
    render json: @post
  end

  def create
    post = Post.new(postParams)
    if post.save
      render json: post
    else
      render json: post.errors, status:422
    end
  end

  def update
    if @post.update(postParams)
      render json: @post
    else
      render json: post.errors, status:422
    end
  end

  def destroy
    @post.delete
  end

  private 
  
  def set_user
    @user = User.find(params[:User_id])
  end

  def set_post
    @post = Post.find[:id]
  end

  def postParams
    params.require(:post).permit(:title,:body, :likes, :User_id)
  end

end
