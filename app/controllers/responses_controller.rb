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
    @event = Event.find(params[:event_id])
  end

  def create
    @event = Event.find(params[:event_id])
    @response = Response.new(response_params)
    # not the most elegant solution (below) but it works; can refactor
    @response.event_id = @event.id
    @response.save
    if @response.save
      render "responses/thanks"
    # else
    #   redirect_to "/responses/new"
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
    redirect_to "/events"
  end

  private
    def response_params
        params.require(:response).permit(:comfort_score, :completeness_score, :name)
    end
end
