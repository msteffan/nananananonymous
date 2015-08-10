class EventsController < ApplicationController
  # before_action :authenticate_user!, only: [:show, :create, :edit, :update, :destroy]

  def index
    @events = Event.all
    @lesson = Event.new
  end

  def show
    @event = Event.find(params[:id])
  end

  def new
    @event = Event.new
  end

  def create
    @event = Event.new(params[:event])
    if @event.save
      redirect_to "/events/index"
    else
      redirect_to "/events/new"
    end
  end

  def edit
    @event = Event.find(params[:id])
  end

  def update
    @event = Event.find(params[:id])
    @event.update(params[:event])
    redirect_to "/events/index"
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    redirect_to "/events/index"
  end
end
