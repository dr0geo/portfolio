<script>
  import Inview from 'svelte-inview';
  import { selected } from '../../stores';

  let ref;
</script>

<Inview
  wrapper={ref}
  threshold={0.5}
  on:leave={({ detail }) => {
    if (detail.scrollDirection.vertical === 'up') {
      $selected = 3;
    } else {
      return;
    }
  }}
>
  <section bind:this={ref}>
    <h3>come<br /><em>CLOSER</em></h3>
    <div id="container" class="container">
      <Inview let:inView wrapper={ref} rootMargin="-350px" unobserveOnEnter={true}>
      <div class="card" bind:this={ref}>
        <img
          src="/images/logo/hercules.png"
          alt="Military pilot"
          loading="lazy"
          class:fadeIn={inView}
        />
        <div class="circle">
          <div class="line" class:animate={inView} />
        </div>
        <h4>2012 - 2020</h4>
        <p>
          &#x1F6EB 2012 was my starting point in the French Air Force. I joined as a student pilot, and I qualified as a <strong>military transport pilot</strong>. I chose to fly the C-130H because of the great variety of missions it was capable of, and I stayed in my tactical squadron for 4 years. This currently is my major professional activity and it allowed me to gain <strong>rigor</strong>, a strong <strong>team spirit</strong>, high <strong>adaptability</strong> as well as a good capacity to <strong>solve problems</strong> under time constraints.
        </p>
      </div>
      <div class="card">
        <img
          src="/images/logo/training.png"
          alt="Military pilot"
          loading="lazy"
          class:secondFadeIn={inView}
        />
        <div class="circle" />
        <h4>2020</h4>
        <p>
          I decided to leave the French Air Force in 2020, as I was thinking about a professional retraining for a little while at this moment. Indeed, the missions I was involved in were great, but I felt the need to settle down to be able to start a family in a more suitable environment.I took a <strong>flight instructor</strong> job in an Irish company based in Cork and started <strong>learning web development</strong> on a part time basis. As mentionned above, the covid-19 crisis speeded up my transition towards the following step. &#x1F6EC
        </p>
      </div>
      <div class="card">
        <img
          src="/images/logo/dev.png"
          alt="Military pilot"
          loading="lazy"
          class:thirdFadeIn={inView}
        />
        <div class="circle">
          <div class="line-hide" />
        </div>
        <h4>2021 - Ready to move!</h4>
        <p>
          After some months of <strong>intensive web development self-training</strong>, I was able to get my first job offer: I had to create an <a href="https://peintepox.vercel.app" target="_blank" rel="noreferrer" title="Peintepox website">industrial company website</a>. And right after this, I had the opportunity to build the website of a <a href="https://dev.creperie-augustine.com" target="_blank" rel="noreferrer" title="Crêperie Augustine website">French restaurant</a>, including <strong>online bookings</strong> and <strong>click & collect</strong> features. This allowed me to learn a lot more about the technologies I trained on during the past months. Now, I am <strong>looking for a full-time job</strong> where I can use my developer skills! &#x1F60A
        </p>
      </div>
    </Inview>
    </div>
  </section>
</Inview>


<style>
  section {
    background-color: #f2f2f2;
    overflow-x: hidden;
    padding-top: 0;
  }

  h3 > em {
    background: linear-gradient(
      transparent 46%,
      #ffcd3e 46%,
      #ffcd3e 75%,
      transparent 75%
    );
  }

  .container {
    display: flex;
    flex-direction: column;
  }

  .card {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin: 50px auto;
  }

  img {
    display: block;
    height: 30vw;
    max-height: 150px;
  }

  .circle,
  .line {
    display: none;
  }

  a {
    border-bottom: 1px solid black;
  }

  @media only screen and (min-width: 1280px) {
    @keyframes translateLine {
      0% {
        transform: scaleX(0);
      }
      100% {
        transform: scaleX(1);
      }
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .container {
      flex-direction: row;
    }

    .card {
      padding: 0 30px;
    }

    img {
      height: 11vw;
      opacity: 0;
    }

    .circle {
      background-color: #bbbbbb;
      border-radius: 100%;
      display: block;
      height: 20px;
      margin-top: 30px;
      width: 20px;
    }

    .line,
    .line-hide {
      display: block;
      height: 2px;
      left: 20px;
      max-width: 1120px;
      position: relative;
      top: 9px;
    }

    .line {
      background-color: #bbbbbb;
      transform: scaleX(0);
      transform-origin: left center;
      width: calc(2 * 90vw / 3);
    }

    .animate {
      animation: translateLine 3s ease-in-out both;
    }

    .fadeIn {
      animation: fadeIn 0.7s ease-in-out both;
    }

    .secondFadeIn {
      animation: fadeIn 0.7s 1.3s ease-in-out both;
    }

    .thirdFadeIn {
      animation: fadeIn 0.7s 2.5s ease-in-out both;
    }

    .line-hide {
      background-color: #f2f2f2;
      width: calc(100vh / 3);
    }
  }
</style>
