class UserSerializer
  include JSONAPI::Serializer
  attributes :id, :email, :nikname, :created_at
  has_many :tweets
end
