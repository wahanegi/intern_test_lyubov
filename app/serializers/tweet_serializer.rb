class TweetSerializer
  include JSONAPI::Serializer
  attributes :body, :user_id, :user, :created_at
  belongs_to :user

  def user
    { id: object.user.id,
      nikname: object.user.nikname,
      email: object.user.email
    }
  end
end
