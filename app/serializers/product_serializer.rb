class ProductSerializer < ActiveModel::Serializer
  attributes :id, :name, :price, :image, :size, :color, :category, :desc, :quantity, :subtype, :backimage
end
