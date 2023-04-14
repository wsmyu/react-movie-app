import React from 'react';

const Footer = () => {
  return (
    <footer class="footer mt-auto py-3 bg-dark">
    
  <div class="container">
    
    <div class="row">
    <div class="col-md-2">
       
       <ul class="list-unstyled text-small">
         <li><a class="text-muted" href="/favorites">Favourites</a></li>
       </ul>
     </div>
     <div class="col-md-2">
       
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="/cart">Cart</a></li>
        </ul>
      </div>
      <div class="col-md-2">
       
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="/comparison">Price Comparison</a></li>
        </ul>
      </div>
      <div class="col-md-2">
       
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="/feedback">Send Feedback</a></li>
        </ul>
      </div>
      <div class="col-md-2">
      
        <ul class="list-unstyled text-small">
          <li><a class="text-muted" href="/login">Sign In</a></li>
        </ul>
      </div>
      
      <div class="col-md-2">
       
       <ul class="list-unstyled text-small">
         <li><a class="text-muted" href="/challenge">Challenge</a></li>
       </ul>
     </div>
      
      
    </div>
  </div>
</footer>
  );
};

export default Footer;