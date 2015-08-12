class EventsController < ApplicationController
  # before_action :authenticate_user!, only: [:show, :create, :edit, :update, :destroy]

  def index
    @events = Event.all.order('created_at DESC')
    @lesson = Event.new
  end

  def show
    @event = Event.find(params[:id])
    @responses = @event.responses
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      redirect_to "/events"
    else
      redirect_to "/events/new"
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    @event.update(event_params)
    redirect_to "/events"
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    redirect_to "/events"
  end

  private
    def event_params
        params.require(:event).permit(:name, :date, :instructorname)
    end
end
