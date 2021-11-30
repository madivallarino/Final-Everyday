class CartSerializer < ActiveModel::Serializer
  attributes :id
  has_many :products
  belongs_to :user
end
