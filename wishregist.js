const fetch = require('node-fetch');
const cheerio = require('cheerio');
const fs = require('fs');

const generateIndoName = () =>
    new Promise((resolve, reject) => {
        fetch("https://swappery.site/data.php?qty=1", {
            method: "GET",
        })
            .then((res) => res.json())
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err);
            });
    });


const register = (datra) => new Promise((resolve, reject) => {
    fetch('https://www.wish.com/api/email-signup', {
        method: 'POST',
        headers: {
            'authority': 'www.wish.com',
            'x-kl-ajax-request': 'Ajax_Request',
            'x-pc8g5v7m-a': 'E--IulwxCQzj3=3Kj_hrsfpQ=QxhRUkZfIpdY02vmhbGo7Xh89b=LplNElSIK9nvTShR6kAqUsnpfDJcPRYZ_T3==lNMks3Noh8xpy0HbAIgYJYu02F7zVm9nKeX-l2KgKkq=0XFe9VOLCMmzGwDYbVtGl18rh579yTC-UiVGA1YWepf8UG49v_teMpjplfAr_Hk4R5e_JqMuRoG1vjy7jPUjYLxByUtG9-KFI67M-N-wU1eUK-rUpy1O_B7pPX3YrFi3d7tOhNq0r6PAYJszQP4ojurZqcl7IUw8qw448OH7S=g4X3odIxBGlUQHbI7uFDomfK1cs0N7hNDjuIjUrAIzVg5zzCYW5uCxt_A8ECdMbAlSqYurhBB1GfRqR8C2rNTEsO3yB23bCJKLx4mh382zjoSvi7eH37mvjtE8wLMJ_GxAnR_7byp7=mTtz4x5RVLhz9nh3Ap8CdwVMiBM1UrtmLolFchsMY9DmVWQYGvJ16=7THPNB6Pq6gCGN0Sq_Nt8gS0GGpGbWtZvnYmtQnsO1JppuNPtziMEXcZpJx6lMHTomiylQUSEIZLS=_5thWmxj0blm3EE6v-Q_h3=gMjo=RXMl2UJQoF_GNLpYcFJsDbtmLKKr8SbKSSYvJ2pjlXdG3uLobck9eK4vk8rlcpVXpnsdwbGer-=C8I-VECXwj1ibThFetGMNwxe_Wk=Hr50bHO_AyMgkPXF0Mh5v38zdwgQrvFZu2yDDenm2CmZvktxN=XAd7cnC=y=xmi_rMdR_ETMqW5ZT3uw=RUwOfsyL3Qlwet_iS9E6zN9rIz0Qtingb3vunZfwqeinjszbJLLQBBiInJYAybeEObK6VtqtGdl=eh4lP8luBnmOo-jW433UqrUv1VGjC8hc9EfIeJM==8_2VGVpG0M7OpOpckm-gDMHCQO-2kFDBRw3HYUgw0XWsWLrQz_L_kbGgUYOOs4fhSMObgCoJgBNZzBTJrKwTFJ39y_v8sryZM6RwIlgf3mvIH1s5vD7=yteIMfc=dq7EKpLgSW0VHZNW0zlWbyA51wwoVUTdpZtARLXY-sxm7_YLshMmAEbnLsG6dFumL0B-nuST2btWZ0G_YcXQnNWB-NccOAlfCMopBt718vi1VovVV0FMKeGMDogqiwRtZlAJRjbh9sX_zMQW8Miwft-BDdQkLMlPQdF=4M6mWrHTfFFf-=fnsYW20VbJrUDPxwlz3XP=OwAR3s5OJewJWF_i8SxyltieXcS=klvqmwOtYNVeG5vLUc2iEgXZJpNrVYJ9-D914Vk5SYxVuIk9jqMMr-ljcuQJG5Zd4-OpPBhnUAUl01UMOWJCKP7g8eX-uBFp4YKoBL9DJA0-ITuFnnXg78QmvbOI6sdKX2tAxJiQ4Woktg3-mOe2ZMx9dFMMMUtMdvzETb3ccV8JzW00ph4IqKcxr3_NzlArMeZzlWHlhLKMb3toY8H1gbBBPLtFAkrHmqMt-4KRvzk1ApBZ95ptyYOLMPm6e3OF0wQib=k_59kKS8PibyOgCDAby2DjXX0SSfv7ST4dUJgSrv8hYE3Ts3Ec46DDtZTld1Lr6seVxuqbi6Uth3wCqtuvVhrh65CC2HdwXY9o1VM8gt4NVgLRL8_0IxEfJNQ7v-D1VFC52vH=UgtDBoRj1OZLCzqZMVIb1EE78r3cL-pOc8enEXAxRlBi6cDPZgC=Qn28v48s0PKpguyp44zKyAI48dNOdtKyEweWMHdHJXD7RflqSy5C86QNc-SGimIGlimCbr1HQJ7boXigvr0cYN9MggpEPSAY9lC2kAln1Pex7I4hjg8PivNWx6DSf=O7L3Yjvb7kWk-Ugu4v_BO9=Vkn2X4mgSCbHJlI99Df5wE-u2XH-UdBygfCk0oh=0dqMJ2oSdcE8TQhsboblLiZuCb221HHQ7IciRILCCWpgvR5AvmxnWAAw4X7IP0k19PCQAKIkH5Ag6ROImKt1RU78929fYkuU0dWeWfn6y1Z-CSrgWVbvwx54iZPUZu25IO8RfgkGPcJMHmim2_J4egs33Utkp5lj2msrTBBT5wm_PcXLJDwHk1s6B99gHwTjWEhwCREp6ZPNUDyVUwrUKtWtne6WN3PMEgLlY8BcqDj00uFt5kjbwxKjwdDZmIkP37bi914G-WtOzP4KnppgMbXSP-lcAJXAJnCjnQ-v7LxDEkjTgIfv9X7QyBB5ZICgzMzYUj1uAw2U0WDfdLVG7K20Nw0EHc9lqXdWyGFjY6kM1SGqXBJhTdX7wU4wNm30cpyccAFq10tJHbNf4yS4LizTVw_m5s_W1qGCjNSeBkL-z0qcoNHAzbh5=V4TEj6R8c5BXLMHBDU4BYoHdUTVpnFA4huukt4WlVUiNIPmZn=OWEgR--fiDy0TDDDCd3nyAA9zkY09gfpQ=EX6=b0Pj-AcU_483vQQygdSpU0q5y3skwWxI4vCYb6Bbkb7IPj5MS-dZJ61F-B1wcnVFDJxED3vQLni=WJ58fvb4-g=r8qk6bqEpNzNUGoBNBjJxutRWWOXHCFggf1YU0ffuvxbW9g_yf_5rgSX10VlYCCpzwN00kkxMN08YBvOCA-Hkf5tfn4KMjE6fmH6b-tdsd4rW6RHf7kPl8V42ZKofM4Ot=-4SvUiQEMZN6cO3mW5rPHoIBNIBSEu75rJjrnjokPhIvH0bAkQwIdj6TIL8RsmF7yOZoMBGfB4KluV_my=CsXJN9sZSVrzB83xQKCmvjCvDZVscV88jU7YgsVrCWlKnZ1Pdop-ym4dq61FgK21_Z7FvERxzxsJ4CsE36pigQGmRYFmqWkxnR2Sed4g5z-2-4YvquOnTPByQtnx-6BSGcybyqQBkzNuXLN-qUQteI-XWfPxt=kvICevhZgtKqKvd=K0zB=kg_Eu9fJBWpGkUet8ww3TdlKB3rFXdFf8_DTt7CueVTomj=AHkC9UNlEZHP75YCF6D8ohOOqul5TLfvHSNsHULfDscP2en1DHqKcwPT71ClqvqbsAKitGwi462k3-IyQhU8HD_uzDL_qAeqyTIWqq2xI6JM=M8gB=WH-Z3zwQ-yfHTOxCHd1lumePmZ9IE_Qlf8RMhVJTtuqWs_2h_8nTBvV1t3FkN6rqpFA=fTLqBvypLnhcGz66iVBIxKvo-PEX2zhr_kFRd3ZRlPgN7Y9262tKCsZzFqh0WQL_6bvxA5h0UdJNuYjCJziidoQrhbfZQhoQg0WiMfRmRrO5yoPGHvE=isgJRVGtBJO8ChczslupBnB5s=rjdmYvH4dCdWGxPX2qc-d_O9O8XjXBKst2AD-djucZ_XZKdlT3uMeojJDvOiKLOVyqcxEN53oNmy=r0VL110CSeBotJbqzjcxW28160pAKxkmG7FkWgeAfeEy2cGTvdeLvn-rERpv_yU_Juk606tI9V0SOmw-Y229LE9KlYwFkZuVuxO=ACOnJ_MeZnlRGbkqtcYh4NJ394sgKyMHs5_n5FmNF2tCQeUyoRSCzfpH33EZGrYjOvOSWp=HA8kC_L6SpdP78-kooqBQ6GTDh_FU3HpZJTP9B8TDumWf6SChCCdrZdm=ZSPSIEWgOI0IKp2qQtDOQ6OUXA4PUuPjmC45i1KHHyVwYEVXsQYWneB5f-yyQwJF2rVwfxMoPl3uVUKX1tQJo_eYtX07h_pFJFq=XOmOGN2UzOboSxCDljITNdmsUZkpAMNfOjq4k0JXTs41RiDmMAW-HO8g7-11i=kzRCfKF7qnjuYDCNGB_tJeRi-_P5CPr9pWyvW4xEKH19bIy3mCJefTYIqlqRzqFZOFf4u4S=LqZmJzS2-eFHv788bKRAPJpwERKfjzqGXXAfdzlYoP22gO=R1wZcQROPBezsTeTXmZXT_Ff3vGciPXTG33fLFpxrhfIWunR3Sc=EtUp5c5-AYbEBf1y=ZprgJlWJhh81zuo8McZvL3vDw5FJXb2OJJGKIQNPZ_pm7GXe4tLN1x41gNS9qG-s17ozvOFyvSAFTlRrQ2xU2B2M5T0_vLkeNnP4mrqVDe8z_wwXSwF-PEXRk9Fel_pnHoDGSRjsIiBXFAgztV02WZGK7W5mJoxD6HwbBA8NOIKCr=SbKPs6qtmlgdk3MLAqxD=vV3FzKbf41NhxRmW8mFx65B5jmmsiA6jUxXSq_krBwXnsMFIQZEcrymupd835H2Ew83dCXpVJqB4kEj0C8EDFDKB3f5yz7R7OCWQOHdOluDPHECqf_t6jne14LIWXVwpS9X9CLkm5uee9UqTb6thtN4fJCpHLulDNrLeCKTRME_blKqEvx9mD9uXQcLcxcbGF56FW5nnnfdZhwH6Reym30jtq1=PHFCrWEl177G8vAws1enZtQ8vGxl14e7dm44g5FivDbpW-Arm1w2Ux_37VBV5EymLH3z9eH3dHBNIieR3Lj-kSRnEXID_22gg8SRGEX-42sWeXkEEBMsHqPx5PdE4WZnWXJsPLKQmfj9ZEs0ogRRx40l7ghYDNXSFKkEhe7hw_1Pj9q9n20oG4rJALeIcRP5965zqDewnbEogDnfSATCM-QT77lVcZXHOz16vp0M=gBIhxZ_-4SrsD11UynRPU2hfpF0_bX3wnzoXUXIqZ6h1U5XTwRw=sMrwN5xWdrxRDE_uzZd9nDhPA6bqfDBRKl0UW9lHEfEu6DPES1q_wq6IYilw32cyvRi1jtuhQApdtr207N8AWKKvvyCGzuc0J2ClgMTzjgzmk3Tn924mQ2=xP3M2BVjymSSq5KUdW8DH_hyDRFOZnKiq8sOovlut17E99bgAQ91BOwBFtkqKXMGXkNM5xGWMAJQKe1DWR4QigMMH4TrNNOqHJwCZEU1I92XmWMXZZyp4QpYAUOY_r37b_xXX7wbWWI=KX_BGk8iAfEo0SvPCkCtZDqFAJXVvBrFUjiGF6QK=zP7Zce2hnEG3CMpxQpFjUuex0U_ECYTeR-0_7yVfQ4A8_1tJBg85FMs-E_Oluzr7pnDBJMVoikTdsyU8-G98AOMwCzUq20HE8IVN7ZzpB5kN96MsQH-xZRUyl-MG0nv7ZZBqxvhAStOOV9ZotTWAjfDEKqnNxXicD6mstJ2wFfr8r=TVidEpYODhu3XreScfcdR_QBDRw-YQFcN0zeb4cmxKipBKbABZ6bD27_hiHK3Wb5t-Og59cpqby=i_TZAvVX4Sls26dxcA2lY4ttxvtoMJTL4Yh2ic1-XkJOdOTC-IbqD0i5CTAWcNdF-xs5m6OTKtJI=t7eKOEE7CSiZXgjmThdcElTfRUwjz0mxnJ_4E_xyQCfQjjANq3WA-tE5v-hXg-8=rVAubMoTWY3FjRTW3m6gB9Q9AcL7Z5GPUp=NFZ8JBkIlUR=JgDGhc3oC2Lx=5mxjzhdhdkdeFyUCPQ60Sfz4SzPPRHxwl5Nsc0MYJZhG8L=tD3s7EE-2uYYrEQo5n=KQHqglrHpGNA8NDw6CiXBjVemjWhJqonnfYHStOsNXEvWO0ERiGtzf1Qomzyg=lUtD0XKAEM8eOk36BlvOO_3pClPTDsHct0UVNC23IHdpQJDOsgXjrq3GYH0wQz_w_wsUQHg201s6XewGD_yFXouIuvUPLIzTN=_Bl_Gfo1emcWxVBIbsumg-nnyHTFP1OQW0xQW4HxXQVkSbz80LKYI_=z350RGDsYMd8=CGRqMADs5tq=TiJVu0TD2HS=G2d=vw3cDZdxDdFECcNzUpjJWfud8V8cnAeo2bxA2mnU6rKjKCEAy7YmwGlHfVL3v1TeQKD3w61drtb8qIH8fS2JOKM1nIH7y6VoRpRu_4Y2L7TUFbuztlnDPngQ0kjy0vGs-m6lkFbejjTY3Yb=5uYb5JHrWMdYZYUtFd24MrZxNQYPBqL-7fmis4VgQT4BjHjB7EMBcJeV7trNMrNqxtFGMMopZI9hHGG5bnZ1=QvU3HTEob9yPowZPF2OUx6FYu1Vv46EPbVtdzSOMobskuL0pVMMG4N_dDqUqEc744CNkLS915w=qP3k83sg00X8ElEptnzZfCt3J_KRfPMXW_7ZLlXpuvI5Xp3OzP7kb52htV_OWx49CzUqePKn7ZmmXYQiB1jV8v_qMxry41NRHrUChb13zKVR2rJJPIFQBADUR55h4rU-GjUTYyHpv=OZukdTdIxW8tvpTsYSr9bvmCvupzFE0h1EGeg=dwvuAdMv0wFkX3odb0CEk3ROqsIWKYy3Itg3=jARz8ecpoFk3HXP1AK87zfOg0m0CGRVxMFKxH6UdjV0lEVFxuXZrIqIL-S6OfIT5pfO9gQnGWXmYzdqObmyHY95dmdRjgiyovmWrDjVF0u1652UvmvHn27iDJIfoerQoXhexzYAZL52BXx4yk3hHkNpkqU6OomnbXrfdfYcDQygx71=fWynXeVZpqxHm88g-Cu5UAt_uIDyOUV=l=j0-8UHxEpVJstieKVD_ZSYr1M7VorPFzHYOMPc5uzOJWj7wnCJB6CHNMVTHceiuijsw57FcjiieWM4ZZQrbgl86NnLJOeLXOkcVPM-Wbuj8NdpdSHqFY4TyoxQtc51HLC3fV3pSjK4DiBykGvW8inF7BcgBMsOkFwmqr91eD5WgL9EiSNTKO7_IxRztlonuxPmo6ViT3Kno9TVfZlPqZVc0kvuzfzmV5sE--NiX3KlAAI4FiHJEIEhMTU6mR2_SDCIRwu4oVQ9wfsOXpvUofP8u1-fl4s0Dc_fiqSgJtqtTJuolZ1fl1t-nBfDNdtwdQiKvnTt0prHI=R8AvbwNmRb_F6ene_Uu1VboGu1fgbOz2si8Hzczws=TnzNM6nM_3EkSnbvT48OC9MX4uH0SspxWpkp2ZOZDH-=4jkCfw-pf3dEUlhByVEFiwu4F7BY1ru09j5hijti7sJO9D3_93jFQ-Wwu458mYAEQBW6s3M3fQ4gnytFQ38mY9gd2dkV9rlk3PKRHzr5ot0oiLtuGbzwozE-O=yYzffEUs9yk0HgzKrw-4x38uxvKfx90z7R0RXdnsPXtArA4SkZIvvep2tentwcBsuM8jREjv1H3DSojomlQ5=OWdy1ALoT52ciEAS=tqXKOJ7cwpAPs1353Ks=epZVP_VUVnP_ESDNeLw7pIKYFcFZhSR3XVhnCKUdesp_gbpuzXfm8SZb8dYB1-SJBuE_441BMAY38L-jTSUfX6On9Bzz1A2TPwGDS=LcApZnPVRrbefsP0AjeLrJ4QlhKmX_mbUP5b-=yg6Wn_j2pj1pfIO=vtscVxbpjOixLH=ji=Juu62kZEcUo=IK9MnXHWpoftvtYFMji_PYCgg_WCXVeHC1eg-dCImxVFQqOsDgBGxIMnGTD0',
            'x-pc8g5v7m-d': 'ABaChIjBDKGNgUGAQZIQhISi0eIApJmBDgDU1p_asEsYOgAAAABCiXEEAHTKjEazKEOdFd2SXqbO6RI',
            'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/94.0.4606.71 Safari/537.36',
            'x-pc8g5v7m-z': 'q',
            'content-type': 'application/x-www-form-urlencoded',
            'x-xsrftoken': '2|22258bc6|fbbafb87aea3d7dab9032970605a56ba|1634100433',
            'accept': 'application/json, text/plain, */*',
            'x-pc8g5v7m-c': 'AEAN6nd8AQAAudcoMtOZw-kyzmVAAddRwRMooujEAlIS4gDB2dTWn9qwSxg6',
            'sec-ch-ua-mobile': '?0',
            'x-pc8g5v7m-f': 'A2Hm-Xd8AQAAArKQ-zWj1G3ZrG6dP6BMf3me-qt62D_YiIwKhSEAkUyD1qFtAbYBWaCucgqrwH8AAEB3AAAAAA==',
            'x-pc8g5v7m-b': '4jbwdc',
            'sec-ch-ua': '"Chromium";v="94", "Google Chrome";v="94", ";Not A Brand";v="99"',
            'sec-ch-ua-platform': '"Windows"',
            'origin': 'https://www.wish.com',
            'sec-fetch-site': 'same-origin',
            'sec-fetch-mode': 'cors',
            'sec-fetch-dest': 'empty',
            'referer': 'https://www.wish.com/?hide_login_modal=true',
            'accept-language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
            'cookie': 'logged_out_locale=en; bsid=f4bf37267803499084bd00ed07530c23; visitor_id=b5d3e005669e49439d3ca0ea45820a66; _xsrf=2|22258bc6|fbbafb87aea3d7dab9032970605a56ba|1634100433; logged_out_tracker=4a469c3c12a03c2b357e80385c2ba006bef173501764c16f176aab45bdef18e6; is_seo_visitor=1; _is_desktop=true; _timezone=7; sweeper_uuid=a39de528735546f2a046c48400397d70; IR_gbd=wish.com; IR_12396=1634100458692%7C0%7C1634100458692%7C%7C; _uetsid=b196b3c02be011ec9777fd00d2bb8b02; _uetvid=b19705602be011ec9701b1f7c0fd5a93; __ssid=78f33180d7670c6257ea30c745eaeae; _gcl_au=1.1.56251877.1634100461; _fbp=fb.1.1634100460898.1700014588; G_ENABLED_IDPS=google; cto_bundle=QgRi4V92NlBhRkdzNnN1dFJMNjVBdUwwYW9FSDV5S1Z3Q0w1eVR0TjBESXVBQmVtTVJiazBWdUwzbWFWRXM5RzNZUW5uaXNJN1ZWUEVKdE9OM2QzSEFxdTk3R3IlMkJMOSUyQm9yZENmQ1BCcUk3NXl3emEwSXp3SjhncVQ2ejBFZlJOTTJSZlQwQnBHNUhtS3FSN3dPS0hBJTJCSjI5amclM0QlM0Q'
        },
        body: JSON.stringify(datra)
    })
    .then(res => res.text())
    .then(text => {
        resolve(text);
    })
    .catch(err => reject(err));
});

(async() => {
   // for (let i = 0; i < 100; i++) {
    const indoName = await generateIndoName();
    const { result } = indoName;
    const user = result[0].email;
    const first = result[0].firstname;
    const last = result[0].lastname;
    const phone = result[0].phone;

    const datra = {
        "email":user,
        "password":"QWqw1212",
        "first_name":first,
        "last_name":last,
        "url":"https%3A%2F%2Fwww.wish.com%2F%3Fhide_login_modal%3Dtrue",
        "recaptcha_token":"03AGdBq267bI4p5mddHircV7CUh2dImk-NqEc2gBVfGaFim7PFTxqsOvvQP4rT44gfeGrWqmog1-9dmjkSx7Zl4DKgIpkqWH9u1FgZhF_TBA18J3k6BmcjxkHNBqfl2e_4-0wPDmQZkTK-XUrsuF9cWnaVsnIMhkkzLeWpvuFvUI0JxFAHHJU3mD5JtZLo0lO8K-CAuO89K7ass24VRq-mXCEAnhnSgsskjxL_Z8qCYzuKFdPdk5q-LYAaXOLWEST-XRx7CCH3twCNovgyXYL8Uf6XvQP16ty7op31Kk4yukq5A2CJy5HLhNP3-vUad1OW0GM4Pf_XUPdr46lO3s4c2cDDAqT1aSgFYfVvGnqo5BEftHJ2jZAe9xALd0RjaGe_AWAWXeWKSiwKAvQPTZipXHD22IUG2xkLR747Va8tdyF9e7HNjWlWaJE6taIb_aRDu73GfoWlZxo8&is_product_page=false",
        "securedtouch_token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoiYVkwVDRpLzN1MFUzcVZiMkllZVJDVEtuN0hrOGdjeHJlbEFheUdTRTB4dWFSZVl3NVhPb3AwaS9XRlVHWFZBQ2d6Q3dyNnNvQkZuWlAzODFFK29hVnlZZDFQeVVCOGtqK2NVVUI5cDVVaEZWWjlxY1gwdzdXZGxmdHgySFAxOFNqclc1TEdObE4zU3M3TWFEaTIzUmJpcGJOODVyb0JmRmdaT25XM0J1aXNzV2R2SmhiYVFqZmNlN2hKcXVJcFhGRFpLSE1DNTlBQzhEbjJrbUs1M0dKR2tqaWNtOVhrRzcwaWJxTEV1ZHNRZUtybEdlQ1YybWgyYjY0OUJqVWpCd25HMFE2YXBFSzNuQXN6c01ZNjVObWZsQTRTdFFGcUdOd2JIbkVUeTl5cmt5WlMycndGT2RrcUxQWXlFT2pzZXo2aE9WR0J2SDQwL2JiMUNYYnZaV3NBL04veTVwblB1ZXhOa2g0TituaVVJPSIsImlhdCI6MTYzNDEwMDQ0NSwiZXhwIjoxNjM1MzEwMDQ1fQ.Aa5etbJFnoF-cONVeqCuf92p6NCCa8Hv3-2wDJ_8Yjo"
        
    }

    const regist = await register(datra);
   // const token = await gettoken()
   console.log(user)
    console.log(regist,"QWqw1212")
    var hasil = await regist
    hasil = JSON.parse(hasil)
    hasil = JSON.stringify(hasil)
    //fs.appendFileSync('localStorage.txt',`\n${hasil}`);
//}
})();