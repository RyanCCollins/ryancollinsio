# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20161106214812) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "inquiries", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.text     "message"
    t.integer  "category"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "post_comment_votes", force: :cascade do |t|
    t.integer  "post_comment_id"
    t.integer  "user_id"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["post_comment_id"], name: "index_post_comment_votes_on_post_comment_id", using: :btree
    t.index ["user_id"], name: "index_post_comment_votes_on_user_id", using: :btree
  end

  create_table "post_comments", force: :cascade do |t|
    t.integer  "post_id"
    t.integer  "user_id"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["post_id"], name: "index_post_comments_on_post_id", using: :btree
    t.index ["user_id"], name: "index_post_comments_on_user_id", using: :btree
  end

  create_table "post_tags", id: false, force: :cascade do |t|
    t.integer "post_id"
    t.integer "tag_id"
    t.index ["post_id"], name: "index_post_tags_on_post_id", using: :btree
    t.index ["tag_id", "post_id"], name: "index_post_tags_on_tag_id_and_post_id", unique: true, using: :btree
    t.index ["tag_id"], name: "index_post_tags_on_tag_id", using: :btree
  end

  create_table "posts", force: :cascade do |t|
    t.string   "title"
    t.text     "body"
    t.integer  "user_id"
    t.datetime "created_at",                null: false
    t.datetime "updated_at",                null: false
    t.string   "feature_image"
    t.string   "slug"
    t.integer  "status",        default: 0
    t.index ["user_id"], name: "index_posts_on_user_id", using: :btree
  end

  create_table "project_comment_votes", force: :cascade do |t|
    t.integer  "project_comment_id"
    t.integer  "user_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["project_comment_id"], name: "index_project_comment_votes_on_project_comment_id", using: :btree
    t.index ["user_id"], name: "index_project_comment_votes_on_user_id", using: :btree
  end

  create_table "project_comments", force: :cascade do |t|
    t.integer  "project_id"
    t.integer  "user_id"
    t.text     "body"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_comments_on_project_id", using: :btree
    t.index ["user_id"], name: "index_project_comments_on_user_id", using: :btree
  end

  create_table "project_images", force: :cascade do |t|
    t.string   "src"
    t.integer  "project_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["project_id"], name: "index_project_images_on_project_id", using: :btree
  end

  create_table "project_tags", id: false, force: :cascade do |t|
    t.integer "tag_id"
    t.integer "project_id"
    t.index ["tag_id", "project_id"], name: "index_project_tags_on_tag_id_and_project_id", unique: true, using: :btree
  end

  create_table "projects", force: :cascade do |t|
    t.string   "title"
    t.text     "description"
    t.string   "repoUrl"
    t.string   "caption"
    t.string   "featureImage"
    t.integer  "category"
    t.string   "projectUrl"
    t.datetime "created_at",                       null: false
    t.datetime "updated_at",                       null: false
    t.integer  "user_id"
    t.text     "milestones"
    t.text     "designPatterns"
    t.text     "technicalInformation"
    t.text     "technicalReview"
    t.text     "reviewerName"
    t.string   "slug"
    t.integer  "status",               default: 0
    t.index ["user_id"], name: "index_projects_on_user_id", using: :btree
  end

  create_table "references", force: :cascade do |t|
    t.string   "name"
    t.text     "body"
    t.string   "avatar"
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "company"
  end

  create_table "tags", force: :cascade do |t|
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tutorial_comment_votes", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "tutorial_comment_id"
    t.datetime "created_at",          null: false
    t.datetime "updated_at",          null: false
    t.index ["tutorial_comment_id"], name: "index_tutorial_comment_votes_on_tutorial_comment_id", using: :btree
    t.index ["user_id"], name: "index_tutorial_comment_votes_on_user_id", using: :btree
  end

  create_table "tutorial_comments", force: :cascade do |t|
    t.integer  "tutorial_id"
    t.integer  "user_id"
    t.text     "body"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["tutorial_id"], name: "index_tutorial_comments_on_tutorial_id", using: :btree
    t.index ["user_id"], name: "index_tutorial_comments_on_user_id", using: :btree
  end

  create_table "tutorials", force: :cascade do |t|
    t.string   "link"
    t.string   "title"
    t.text     "description"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "status"
    t.integer  "user_id"
    t.text     "body"
    t.string   "image"
    t.string   "slug"
    t.index ["user_id"], name: "index_tutorials_on_user_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "auth_token",             default: ""
    t.string   "avatar"
    t.integer  "role",                   default: 0,  null: false
    t.text     "bio"
    t.string   "name",                   default: "", null: false
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  add_foreign_key "post_comment_votes", "post_comments"
  add_foreign_key "post_comment_votes", "users"
  add_foreign_key "post_comments", "posts"
  add_foreign_key "post_comments", "users"
  add_foreign_key "post_tags", "posts"
  add_foreign_key "post_tags", "tags"
  add_foreign_key "posts", "users"
  add_foreign_key "project_comment_votes", "project_comments"
  add_foreign_key "project_comment_votes", "users"
  add_foreign_key "project_comments", "projects"
  add_foreign_key "project_comments", "users"
  add_foreign_key "project_images", "projects"
  add_foreign_key "projects", "users"
  add_foreign_key "tutorial_comment_votes", "tutorial_comments"
  add_foreign_key "tutorial_comment_votes", "users"
  add_foreign_key "tutorial_comments", "tutorials"
  add_foreign_key "tutorial_comments", "users"
  add_foreign_key "tutorials", "users"
end
