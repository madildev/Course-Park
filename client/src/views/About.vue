<template>
  <section class="about">

    <div class="parent">
        <div class="title">
            <h1 class="head">
                About Us
            </h1>
        </div>

        <section class="L-R">

            <div class="about_us">
                <p class="left">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est ducimus, quis ipsa dolore enim mollitia provident aliquam saepe cum illo temporibus omnis, excepturi hic libero impedit sunt quam consequuntur dolorem! <br> &#160;
                    <span style="font-size: 30px;">P</span>erferendis aspernatur aut, debitis, inventore Fugiat ipsam porro expedita vel, ducimus, ipsum iste ea inventore accusamus alias, ratione labore in odio id voluptate. Modi unde vero impedit cumque
                    adipisci. Rem, culpa vero unde quae nisi perspiciatis <br> &#160; Commodi maxime ipsum incidunt error deleniti ex voluptates odio nam aliquam facere iste iusto illum qui voluptatibus nostrum? Tenetur, nam! At, nemo in. Quos, accusantium
                    quibusdam quis expedita modi nam odit rerum voluptas id aliquam ipsam qui, a dolorem cupiditate consectetur? Quaerat officiis enim saepe tempore facilis praesentium molestiae corrupti nemo minima reprehenderit. nemo in. Quos, accusantium
                    quibusdam quis expedita modi nam odit rerum voluptas id aliquam ipsam qui, a dolorem cupiditate consectetur? Quaerat officiis enim saepe tempore facilis praesentium molestiae corrupti nemo minima reprehenderit.
                </p>
            </div>

            <div class="quote">
                <h1 class="quotation">
                    "
                </h1>
                <p class="right">
                    SO MUCH OF WHO WE ARE IS <span style="color: white;">WHERE</span> WE HAVE BEEN.
                </p>

            </div>
        </section>
    </div>

  </section>

</template>

<script>

export default {
  name: "about",
}

</script>

<style>

.about
{
  width: 100%;
  overflow: hidden;
}
.parent {
    
    background: var(--ternary);
    align-self: center;
    justify-content: center;
    align-items: center;
}

.L-R {
    display: flex;
}

.title .head {
    color: var(--pure);
    font-family: 'Noto Serif';
    font-size: 50px;
    padding-left: 25px;
    padding-top: 30px;
    position: relative;
    left: 20px;
}

.about_us .left {
    width: 80%;
    font-family: Segoe UI;
    font-size: 20px;
    margin-left: 20px;
    left: -20px;
    top: 20px;
    padding: 10px;
    color: var(--pure);
    position: relative;
    left: 20px;
    text-justify: auto;
}

.quote {
    position: relative;
    top: -100px;
    width: 150%;
    height: 450px;
    margin: 100px 100px 20px 20px;
}

.quotation {
    position: relative;
    font-weight: 600;
    color: #000000;
    opacity: 35%;
    font-size: 200px;
    font-family: Futura;
    margin-top: -40px;
    margin-bottom: -180px;
    left: 20px;
}

.quote .right {
    width: 100%;
    padding: 0px;
    font-family: Segoe UI;
    font-size: 60px;
    text-align: center;
    color: var(--secondary);
}

@media screen and (max-width:1920px) {
    .about{
        width: 100%;
    }
}

@media screen and (max-width:1219px) {
    .title .head {
        font-size: 37px;
    }
    .about_us .left {
        font-size: 19px;
        width: 75%;
    }
    .quotation {
        font-size: 170px;
        top: -30px;
        left: -10px;
    }
    .quote .right {
        width: 200px;
        font-size: 45px;
    }
}

@media screen and (max-width:1024px) {
    .title .head {
        font-size: 35px;
    }
    .about_us .left {
        font-size: 18px;
        width: 75%;
    }
    .quotation {
        font-size: 170px;
        top: -20px;
        left: -10px;
    }
    .quote .right {
        width: 200px;
        font-size: 45px;
    }
}

@media screen and (max-width:786px) {
    .title .head {
        font-size: 30px;
    }
    .about_us .left {
        font-size: 16px;
        width: 80%;
    }
    .quote {
        top: 20px;
    }
    .quotation {
        font-size: 150px;
        top: -30px;
        left: -10px;
    }
    .quote .right {
        width: 200px;
        font-size: 40px;
    }
}
@media screen and (max-width: 600px){
  .quote{
    display: none;
  }
}
</style>