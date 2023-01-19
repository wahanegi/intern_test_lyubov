class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
         
  has_many :tweets

  validates :nikname, presence: true, uniqueness: true, length: { minimum: 3 }, format: { with: /\A[A-Za-z][A-Za-z0-9_-]{3,19}\z/ , message: " Please use only characters -_ "}
  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP, uniqueness: true }
  validates :password, format: { with: /\A\S{6,128}\z/, allow_nil: true }

end
