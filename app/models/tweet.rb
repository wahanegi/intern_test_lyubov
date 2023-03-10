class Tweet < ApplicationRecord
    belongs_to :user

    validates :body, presence: true, length: { maximum: 255 }
    default_scope -> { order(created_at: :desc) }
  end