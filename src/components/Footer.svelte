<script>
  import Inview from 'svelte-inview';
  import { selected } from '../stores';

  let ref;
</script>

<Inview
  wrapper={ref}
  rootMargin="67px"
  threshold={1}
  on:enter={({ detail }) => {
    if (detail.scrollDirection.vertical === 'up') {
      $selected = 6;
    } else {
      return;
    }
  }}
  on:leave={({ detail }) => {
    if (detail.scrollDirection.vertical === 'down') {
      $selected = 5;
    } else {
      return;
    }
  }}
>
<footer id="contact" bind:this={ref}>
  <h3>get in<br /><em>TOUCH</em></h3>
  <div class="container">
    <div class="item">
      <img src="/images/logo/email.png" alt="" loading="lazy" />
      <p><a href="mailto:geoffroy.vie@domain.dev">geoffroy.vie@domain.dev</a></p>
    </div>
    <div class="item">
      <img src="/images/logo/phone.png" alt="" loading="lazy" title="Signal / WhatsApp" />
      <p><a href="tel:+353896126560">+353.89.612.65.60</a></p>
    </div>
    <div class="item">
      <img src="/images/logo/location.png" alt="" loading="lazy" />
      <p>Based in <a href="https://www.google.fr/maps/place/Cork/@51.7178672,-10.146355,7.25z/data=!4m5!3m4!1s0x4844900891beb961:0xa00c7a99731c5d0!8m2!3d51.8985143!4d-8.4756035" target="_blank" rel="noreferrer">Cork</a>, Ireland<br />Ready to move anywhere! &#128526 &#x1F6EB</p>
    </div>
    <div class="item">
      <img src="/images/logo/github.png" alt="" loading="lazy" />
      <p>@<a href="https://github.com/dr0geo" target="_blank" rel="noreferrer">dr0geo</a><br />Dig a little here... &#x1F609</p>
    </div>
  </div>
</footer>
</Inview>

<style>
  footer {
    background-color: #1d1d1d;
  }

  h3 {
    color: white;
    text-align: center;
  }

  h3 > em {
    background: linear-gradient(
      transparent 15%,
      #ffcd3e 15%,
      #ffcd3e 80%,
      transparent 80%
    );
    color:#1d1d1d;
  }

  .container {
    color: white;
    display: grid;
    grid-template-columns: 1fr;
    margin: 30px auto 0 auto;
    width: 90%;
  }

  .item {
    align-items: center;
    display: flex;
    margin: 30px 0;
    width: 100%;
  }

  a {
    color: white;
    border-bottom: 1px solid white;
  }

  a:visited {
    color: white;
  }

  img {
    display: inline-block;
    margin-right: 10px;
    width: 30px;
  }

  p {
    line-height: 2rem;
    text-align: left;
  }

  @media only screen and (min-width: 768px) {
    .container {
      gap: 0 10vw;
      grid-template-columns: repeat(2, auto);
      justify-content: center;
      width: 100%;
    }
  }

  @media only screen and (min-width: 1280px) {
    .container {
      gap: 0 5vw;
      grid-template-columns: repeat(4, auto);
    }
  }
</style>
