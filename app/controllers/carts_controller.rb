class CartsController < ApplicationController
    skip_before_action :authorize, only: [:create, :index]

    def create 
        cart = Cart.create
        if cart
            session[:cart_id] = cart.id
            render json: cart, status: :created
        else
            render json: cart.errors, status: :unprocessable_entity
        end
    end

    def show
        @cart = @current_cart
    end

    def add_to_cart 
        byebug
    end




end
