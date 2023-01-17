class TweetSerializer
  include JSONAPI::Serializer
  attributes :body, :user_id
  belongs_to :user
end
