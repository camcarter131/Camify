class User < ApplicationRecord
    validates :username, :displayed_name, :email, :password_digest, :session_token, presence: true
    validates :password, length: {minimum: 6, allow_nil: true}

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        user && user.is_password?(password) ? user : nil
    end

    def password=(password) 
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end 

    def is_password?(password)

    end

    def reset_session_token!

    end

    def ensure_session_token


    end
end
