export default function Footer() {
  return (
    <footer className="border-t border-solid border-primary/20 px-10 py-6">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-4">
          <p className="text-sm text-text-light/70 dark:text-text-dark/70">© 2024 Tribal Treasures. All rights reserved.</p>
        </div>
        <div className="flex gap-6">
          <a className="text-sm text-text-light/70 dark:text-text-dark/70 hover:text-primary" href="#">Terms of Service</a>
          <a className="text-sm text-text-light/70 dark:text-text-dark/70 hover:text-primary" href="#">Privacy Policy</a>
          <div className="flex gap-4">
            <a className="text-text-light/70 dark:text-text-dark/70 hover:text-primary" href="#">
              <svg className="feather feather-facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a className="text-text-light/70 dark:text-text-dark/70 hover:text-primary" href="#">
              <svg className="feather feather-twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
              </svg>
            </a>
            <a className="text-text-light/70 dark:text-text-dark/70 hover:text-primary" href="#">
              <svg className="feather feather-instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
                <rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

