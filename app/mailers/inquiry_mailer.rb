class InquiryMailer < ApplicationMailer
  def inquiry_email(opts={})
    category = opts[:category]
    name = opts[:name]
    email = opts[:email]
    message = opts[:message]
    mail(
      to: "admin@ryancollins.io",
      subject: "RyanCollins.io Inquiry",
      message: message,
      email: email,
      name: name,
      category: category
    )
  end
end
