class ApplicationController < ActionController::Base
    #CRLLL
    helper_method :logged_in?, :current_user

    def current_user
        return nil unless session[:session_token]
        @current_user = User.find_by(session_token: session[:session_token])
    end

    def logged_in?
        !!current_user
    end

    def require_login
        unless current_user
            render json: { base: ['Invalid Credentials'] }, status: 401
        end
    end

    def login(user)
        session[:session_token] = user.reset_session_token!
        @current_user = user
    end

    def logout!
        current_user.reset_session_token!
        @current_user = nil
        session[:session_token] = nil
    end

end
