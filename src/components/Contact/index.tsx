const Contact = () => {
  return (
    <section id="contact" className="container flex flex-col gap-5 border-t-2 border-t-primary py-10 text-center">
        <h1 className="text-3xl font-bold font-dmsans">Join Our Coffee Community</h1>
        <p className="tracking-wide font-spacemono">Sign up for our newsletter to stay up-to-date on the latest Kopicoffee news, exclusive offers, and brewing tips.</p>
        <div className="mx-auto w-full max-w-sm space-y-2">
            <form className="flex gap-2">
                <input type="email" placeholder="Enter your email" className="border-2 border-primary placeholder:bg-background placeholder:h-full placeholder:text-primary-foreground placeholder:font-spacemono placeholder:p-4" />
                <button type="submit" className="bg-primary text-primary-foreground font-spacemono p-3">Subscribe</button>
            </form>
        </div>
    </section>
  )
}

export default Contact