class ResponsesController < ApplicationController
  # before_action :authenticate_user!, only: [:show, :create, :edit, :update, :destroy]

  def index
    @responses = Response.all
  end

  def show
    @response = Response.find(params[:id])
  end

  def new
    @response = Response.new
  end

  def create
    @response = Response.new(response_params)
    if @response.save
      redirect_to "/thankyou"
    else
      redirect_to "/responses/new"
    end
  end

  def edit
    @response = Response.find(params[:id])
  end

  def update
    @response = Response.find(params[:id])
    @response.update(response_params)
    # redirect?
  end

  def destroy
    @response = Response.find(params[:id])
    @response.destroy
    redirect_to "/events/index"
  end

  private
    def response_params
        params.require(:response).permit(:comfort_score, :completeness_score, :name)
    end
end
