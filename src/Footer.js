import React from 'react';

const Footer = () => {
  return (
    <footer class="footer mt-auto py-5 bg-dark">
    
  <div class="container">
    
    <div class="row">
      <div class="col-md-4">
      
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="/login">Sign In</a></li>
        </ul>
      </div>
      <div class="col-md-4">
       
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="/favorites">View Favorites</a></li>
        </ul>
      </div>
      <div class="col-md-4">
       
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="/feedback">Send Feedback</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
  );
};

export default Footer;