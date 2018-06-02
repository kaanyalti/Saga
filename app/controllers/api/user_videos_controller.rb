class UserVideosController < ApplicationController
  before_action :set_user_video, only: [:show, :update, :destroy]

  # GET /user_videos
  def index
    @user_videos = UserVideo.all

    render json: @user_videos
  end

  # GET /user_videos/1
  def show
    render json: @user_video
  end

  # POST /user_videos
  def create
    @user_video = UserVideo.new(user_video_params)

    if @user_video.save
      render json: @user_video, status: :created, location: @user_video
    else
      render json: @user_video.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /user_videos/1
  def update
    if @user_video.update(user_video_params)
      render json: @user_video
    else
      render json: @user_video.errors, status: :unprocessable_entity
    end
  end

  # DELETE /user_videos/1
  def destroy
    @user_video.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_user_video
      @user_video = UserVideo.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def user_video_params
      params.require(:user_video).permit(:user_id, :video_id, :reaction)
    end
end
