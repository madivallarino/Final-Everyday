class ProductsController < ApplicationController

    def index 
        products = Product.all
        render json: products
    end

    def home_products
       
        products = Product.where(category: "home")
        render json: products
    end

    def show 
        product = Product.find_by(id: params[:id])
       
        if product
            render json: product, status: :ok
        else 
            render json: {error: "product not found"}, status: :not_found
        end
    end
    def lifestyle_products
        products = Product.where(category: "lifestyle")
        render json: products 
    end
    
    def clothing_products
        products = Product.where(category: "clothing")
        render json: products 
    end
end
