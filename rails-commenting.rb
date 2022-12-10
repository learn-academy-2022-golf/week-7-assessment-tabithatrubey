# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# BlogPosts is the controller that was generated to communicate with the architecture of the rails application. This controller will facilitate interaction between the user, views, and model. The command that was ran to generate this controller was : $rails g controller BlogPosts
class BlogPostsController < ApplicationController
  def index
    # ---2) Since we are in the index RESTful route, we are instantiated posts to give access from the method to the front-end. We are wanting ALL posts, which is why, posts is plural and not singular, as opposed to the show method below. This instantiation will always be plural. Following this instantiation, we can create a new html.erb file in the views folder that displays ruby code to display information. Index can act as the homepage.
    @posts = BlogPost.all
  end

  # ---3) We are using the def show method to display only one instance, and the code below the declaration is searching for a specific blog with its associated id through the use of params which make rails dynamic.
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4) The 'new' RESTful route sends an HTML form for the user to fill out and the data is sent back to the database. This will allow a user to send in a form for a new blog post, if all the logic in the erb file is rendered properly. The associated route to this method would take the param as:'new_blog'. The new method does not require much on the controller, but on the views page, it should be ruby logic saturated. A programmer could embed Ruby logic in the index.html.erb file to place a link to add a new blog. 
  def new
    @post = BlogPost.new
  end

  def create
    # ---5) There is no view assoicated with this method, as create only connects from the controller to the model. This is referencing the blog post params which will take the same attributes that were entered when blog post was first created (i.e. title: string content:string). If the blog post is valid, meaning passes all requirements for blog post's attriubtes, then it will redirect to the path create @post in line 29. STRONG PARAMS. HERE'S WHAT YOU CAN SEND ME AND IF IT IS NOT VALID (TALK TO THE HAND) WE CANNOT COMMUNICATE!
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6) This is going to send an HTML form similar to the 'new' route, but it updates an instance, at a given ID indicated by params:id, and sends it back to the database.
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)This is going to update the blog on the create blog page (line 29), which means it will overwrite the existing instance and send it back to our database. 
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8) If the certain blog post that was passed into the params id has been destroyed, then you will be redirected to the create blog post page as indicated in line 29.
      redirect_to blog_posts_path
    end
  end

  # ---9)The purpose of this method in the private route is for internal authorization only and cannot be modified. It cannot be modified by an unauthorized user who gained access to the database.
  private
  def blog_post_params
    # ---10) The strong params say here's what you're allowed to send from the .permit and referencing the blog_post model. This cannot be altered by an unauthorized user.
    params.require(:blog_post).permit(:title, :content)
  end
end
