class Api::PostsController < ApplicationController
  before_action :set_post, only:[:show, :update, :destroy]
  
  def index
    render json: current_user.posts
  end    

  def show
    render json: @post
  end

  def create
    post = current_user.posts.new(postParams)
    if post.save
      render json: post
    else
      render json: post.errors, status:422
    end
  end

  def update
    binding.pry
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

  def set_post
    @post = Post.find(params[:id])
  end

  def postParams
    params.require(:post).permit(:title,:body)
  end

end
