const Footer = () => {
  return (
    <footer className="border-t-2 border-t-primary p-10 flex flex-col items-center sm:flex-row sm:justify-between">
        <p className="text-center font-spacemono text-sm">© 2024 Kopicleaner. All rights reserved.</p>
        <div className="flex gap-5">
          <a href="/" className="text-center text-sm font-spacemono transition duration-300 hover:underline">Terms of Service</a>
          <a href="/" className="text-center text-sm font-spacemono transition duration-300 hover:underline">Privacy</a>
        </div>
    </footer>
  )
}

export default Footer