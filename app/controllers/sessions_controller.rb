class SessionsController < ApplicationController
  def new; end

  def create
    @user = User.find_by_credentials(params[:user])

    if @user
      sign_in!(@user)
      redirect_to root_url
    else
      flash.now[:errors] = ["Invalid email and/or password"]
      render :new
    end
  end

  def guest_login
    @user = User.find_by_email("guest_user@example.com")
    sign_in!(@user)
    redirect_to root_url
  end

  def destroy
    sign_out!
    redirect_to new_session_url
  end
end
