class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :star_rating, :review
end
