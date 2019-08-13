# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  displayed_name  :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#
 
class User < ApplicationRecord
    validates :username, :displayed_name, :email, :password_digest, :session_token, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    has_one_attached :photo

    after_initialize :ensure_session_token

    attr_reader :password 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username) || User.find_by(email: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64
        self.save!
        self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom.urlsafe_base64
    end
end
