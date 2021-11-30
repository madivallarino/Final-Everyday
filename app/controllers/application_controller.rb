class ApplicationController < ActionController::API
    include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
before_action :authorize




private

def authorize
    @current_user = User.find_by(id: session[:user_id])
    render json: {errors: ["Not authorized"]}, status: :unauthorized unless @current_user
end

def render_unprocessable_entity_response(invalid)
    render json: {errors: invalid.record.errors.full_messages}, status: :unprocessable_entity
end

def current_user 
    @current_user ||= User.find_by_id(session[:user_id])
end

def current_cart 
    if session[:cart_id]
        cart = Cart.find_by(id: session[:cart_id])
        if cart.present?
            @current_cart = cart
        else
            @current_cart = Cart.create
            session[:cart_id] = @current_cart.id
        end
    end
   
end



end
