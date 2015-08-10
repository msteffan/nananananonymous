class ResponsesController < ApplicationController
  before_action :authenticate_user!, only: [:show, :create, :edit, :update, :destroy]
end
