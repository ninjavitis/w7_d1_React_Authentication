# frozen_string_literal: true

class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  ### HAS ###
  has_many :posts

  ### SERIALIZATION ###
  serialize :top_profiles,Array
  serialize :liked_profiles,Array

  ### MODEL FUNCTIONS ###
  def self.random_profile(ids)
    ids = ids.empty? ? [0]:ids
    Profile.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0]:ids
    Profile.where("id IN (?)",ids)
  end

  def self.top(ids)
    ids = ids.empty? ? [0]:ids
    Profile.where("id IN (?)",ids)
  end



end
