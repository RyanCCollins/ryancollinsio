class InquiryMailer < ApplicationMailer
  def inquiry_email(opts={})
    category = opts[:category]
    name = opts[:name]
    email = opts[:email]
    message = opts[:message]
    @email = {
      to: "admin@ryancollins.io",
      subject: "RyanCollins.io Inquiry",
      message: message,
      email: email,
      name: name,
      category: category
    }
    mail(to: @email.to, subject: @email.subject)
  end
end
