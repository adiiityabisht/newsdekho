import React, { Component } from "react";
import NewsItems from "./NewsItems";

export class News extends Component {
    articles=[
    {
      "source": {
        "id": null,
        "name": "Yahoo Entertainment"
      },
      "author": "Yahoo Sports Staff",
      "title": "UFC 290 live tracker: Follow Alexander Volkanovski vs.Yair Rodriguez; Pantoja takes Moreno's belt - Yahoo Sports",
      "description": "Two title bouts headline the stacked card in Las Vegas. Follow along with Yahoo Sports.",
      "url": "https://sports.yahoo.com/ufc-290-live-tracker-follow-alexander-volkanovski-vsyair-rodriguez-pantoja-takes-morenos-belt-200033679.html",
      "urlToImage": "https://s.yimg.com/ny/api/res/1.2/Hev_uAJg.90wPq1OEiDqqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/8b01c390-1e11-11ee-853d-5c529a0f0559",
      "publishedAt": "2023-07-09T04:31:00Z",
      "content": "UFC featherweight champion Alexander Volkanovski and interim champion Yair Rodriguez will face off Saturday to determine the undisputed title-holder at UFC 290 at the T-Mobile Arena in Las Vegas. The… [+3183 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "BBC News"
      },
      "author": "https://www.facebook.com/bbcnews",
      "title": "Cluster bombs: Unease grows over US sending cluster bombs to Ukraine - BBC",
      "description": "Washington is supplying the weapons to Kyiv, but they are outlawed in more than 100 countries.",
      "url": "https://www.bbc.com/news/world-us-canada-66144153",
      "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/146EC/production/_130329638_8ad546e9cb5f6099df2f5f3d1280b5cbfade55aa1639_783_3320_18681000x563.jpg",
      "publishedAt": "2023-07-09T04:00:06Z",
      "content": "Several allies of the US have expressed unease at Washington's decision to supply Ukraine with cluster bombs. \r\nOn Friday, the US confirmed it was sending the controversial weapons to Ukraine, with P… [+6183 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "ABC6OnYourSide.com"
      },
      "author": "Trinity Langbein",
      "title": "Deputy involved in shooting in east Columbus | WSYX - ABC6OnYourSide.com",
      "description": "A deputy was working special duty when they were involved in a shooting on Livingston Avenue and James Road.",
      "url": "https://abc6onyourside.com/news/local/deputy-involved-shooting-east-columbus-livingston-avenue-james-road-suspect",
      "urlToImage": "https://abc6onyourside.com/resources/media/62098d66-3ebf-4436-bacc-eeea9a4b02fb-large16x9_F8EtonGroveshooting_frame_01.jpeg?1684585263097",
      "publishedAt": "2023-07-09T01:09:00Z",
      "content": null
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": ", USA TODAY",
      "title": "Gregg Popovich will return as Spurs head coach on new 5-year deal - USA TODAY",
      "description": "San Antonio Spurs coach Gregg Popovich, the NBA’s all-time winningest coach, has signed a new five-year deal with the team.",
      "url": "https://www.usatoday.com/story/sports/nba/spurs/2023/07/08/san-antonio-spurs-coach-gregg-popovich-signs-five-year-deal-nba/11631582002/",
      "urlToImage": "https://www.gannett-cdn.com/presto/2023/04/09/USAT/4326c1f2-a308-4786-ac00-daf01b5bc9d7-USP_NBA__Minnesota_Timberwolves_at_San_Antonio_Spu.jpg?auto=webp&crop=2426,1365,x0,y0&format=pjpg&width=1200",
      "publishedAt": "2023-07-09T00:49:44Z",
      "content": "Venerable San Antonio Spurs coach Gregg Popovich will return for a 28th season and several more.\r\nThe Spurs announced Saturday that Popovich, who also serves as the team's president of basketball ope… [+2016 chars]"
    },
    {
      "source": {
        "id": "abc-news",
        "name": "ABC News"
      },
      "author": "The Associated Press",
      "title": "A mob storms Tbilisi Pride Fest site, forcing the event's cancellation - ABC News",
      "description": "Hundreds of opponents of gay rights have swarmed the site of an LGBT festival in the capital of the country of Georgia, vandalizing the stage, setting fires and looting the event’s bar",
      "url": "https://abcnews.go.com/International/wireStory/mob-storms-tbilisi-pride-fest-site-forcing-events-100903257",
      "urlToImage": "https://s.abcnews.com/images/International/wirestory_ce5a1f6a162008e9a7de0d139d067358_12x5_992.jpg",
      "publishedAt": "2023-07-09T00:23:32Z",
      "content": "TBILISI, Georgia -- Hundreds of opponents of gay rights on Saturday swarmed the site of an LGBT festival in the capital of the country of Georgia, vandalizing the stage, setting fires and looting the… [+907 chars]"
    },
    {
      "source": {
        "id": "espn",
        "name": "ESPN"
      },
      "author": null,
      "title": "Reds' Elly De La Cruz steals 2nd, 3rd and home in same inning - ESPN - ESPN",
      "description": "Elly De La Cruz stole second, third and home in the same inning Saturday, the latest electrifying play from the Reds' franchise-changing rookie.",
      "url": "https://www.espn.com/mlb/story/_/id/37981040/reds-elly-de-la-cruz-steals-2nd-3rd-home-same-inning",
      "urlToImage": "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2023%2F0709%2Fr1195598_1023x575_16%2D9.jpg",
      "publishedAt": "2023-07-09T00:08:00Z",
      "content": "MILWAUKEE -- Elly De La Cruz became the first Reds player since 1919 to steal second, third and home in the same inning, the latest electrifying feat from the franchise-changing rookie.\r\nDe La Cruz b… [+2911 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NBC Chicago"
      },
      "author": null,
      "title": "Solar storm to make northern lights visible in Indiana, Wisconsin and 15 other states - NBC Chicago",
      "description": "A solar storm forecast for Thursday is expected to give skygazers in 17 American states a chance to glimpse the Northern Lights, the colorful sky show that…",
      "url": "https://www.nbcchicago.com/news/local/solar-storm-to-make-northern-lights-visible-in-indiana-wisconsin-and-15-other-states/3182549/",
      "urlToImage": "https://media.nbcchicago.com/2023/03/northern-lights-1.jpg?quality=85&strip=all&resize=1200%2C675",
      "publishedAt": "2023-07-09T00:06:19Z",
      "content": "A solar storm forecast for Thursday is expected to give skygazers in 17 American states a chance to glimpse the Northern Lights, the colorful sky show that happens when solar wind hits the atmosphere… [+1743 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Trump Speech | Donald Trump Speech At Iowa Rally | Trump Goes After DeSantis on Farming Issues - CNN-News18",
      "description": null,
      "url": "https://www.youtube.com/watch?v=qe7t3HTQBTQ",
      "urlToImage": null,
      "publishedAt": "2023-07-08T23:52:43Z",
      "content": "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later"
    },
    {
      "source": {
        "id": "ign",
        "name": "IGN"
      },
      "author": "Jacob Kienlen",
      "title": "Should You Buy a Gaming Monitor on Amazon Prime Day 2023? - IGN",
      "description": "Expect some good deals on gaming monitors next week.",
      "url": "https://www.ign.com/articles/should-you-buy-a-gaming-monitor-deal-on-amazon-prime-day-2023",
      "urlToImage": "https://assets-prd.ignimgs.com/2023/05/22/amazon-gaming-week-monitor-sale-blogroll-1684767166724.jpg?width=1280",
      "publishedAt": "2023-07-08T23:31:26Z",
      "content": "When it comes to PC gaming, the display can be just as important as the PC itself. If you have a powerful desktop with the latest and greatest graphics card, you need a gaming monitor that makes prop… [+3693 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Daily News"
      },
      "author": "Jessica Schladebeck",
      "title": "Another case of HIV linked to vampire facial offered at New Mexico medical spa - Yahoo News",
      "description": "Former clients of a medispa in New Mexico have been urged to to get tested after another case of HIV was linked to a vampire facial offered at the now-shuttered business.",
      "url": "https://www.nydailynews.com/news/national/ny-vip-spa-new-mexico-hiv-vampire-facial-20230708-4oh6febdandlbneg5f2o5aurle-story.html",
      "urlToImage": "https://www.nydailynews.com/resizer/_MJ_K98SURmNgrXdjoI61FiqocE=/1200x630/filters:format(png):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/tronc/EVWQX4OD7VCIRCXJXZZCFFS2GA.png",
      "publishedAt": "2023-07-08T22:50:00Z",
      "content": "Former clients of a medical spa in New Mexico have been urged to to get tested for blood-borne infections after another case of the human immunodeficiency virus, or HIV, was linked to a vampire facia… [+2105 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WGRZ.com"
      },
      "author": "Sara Dingmann",
      "title": "Taste of Buffalo winners announced - WGRZ.com",
      "description": "The annual food festival held its competition on Saturday, visitors will be able to get a taste of the winners for the rest of the weekend.",
      "url": "https://www.wgrz.com/article/entertainment/taste-of-buffalo-winners-announced-2023/71-d8dfeb3c-3ff0-43fa-85f0-e268c3042059",
      "urlToImage": "https://media.wgrz.com/assets/WGRZ/images/e96c6c57-ff33-4f43-959d-d8e3ddc64ed6/e96c6c57-ff33-4f43-959d-d8e3ddc64ed6_1140x641.jpg",
      "publishedAt": "2023-07-08T22:11:00Z",
      "content": "BUFFALO, N.Y. Buffalo was offering up some of its best bites to eat on Saturday.\r\nThe annual Taste of Buffalo festival held its competition and the judges picked the following winners:\r\n<ul><li>Chair… [+1870 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "New York Daily News"
      },
      "author": "Evan Rosen",
      "title": "Britney Spears security slap reaction: 'Not treated equal in this country' - New York Daily News",
      "description": "Britney Spears says she feels her reaction to the now-infamous incident was in part because she believes she has never “been treated as an equal person” in America.",
      "url": "https://www.nydailynews.com/snyde/ny-britney-spears-security-slap-reaction-america-20230708-jfgwzva2zzdh7jp5s4nnu27diq-story.html",
      "urlToImage": "https://www.nydailynews.com/resizer/M5DAobo9Su1u6_n5KpAy3Quf-os=/1200x630/filters:format(jpg):quality(70):focal(1045x385:1055x395)/cloudfront-us-east-1.images.arcpublishing.com/tronc/7K2XSQARJ3O6T7LZFRNNZNGQ3U.jpg",
      "publishedAt": "2023-07-08T22:02:44Z",
      "content": "Britney Spears continues to voice her side of the Victor Wembanyama security slap incident, posting on Instagram Friday that she feels her obscenity-laced reaction was in part because she believes sh… [+1757 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "WTVD-TV"
      },
      "author": null,
      "title": "Jocelyn Jacobs | AMBER Alert issued for missing 15-year-old NC girl - WTVD-TV",
      "description": "An AMBER Alert has been issued for a missing 15-year-old girl in Robeson County.",
      "url": "https://abc11.com/jocelyn-jacobs-amber-alert-missing-girl-child/13479107/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/13479173_jocelynjacobs.png?w=1600",
      "publishedAt": "2023-07-08T20:57:42Z",
      "content": "PEMBROKE, N.C. (WTVD) -- An AMBER Alert was issued Saturday afternoon for a missing 15-year-old girl from Robeson County.\r\nAccording to the North Carolina Center for Missing Persons, Jocelyn Jacobs w… [+687 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Timesobserver.com"
      },
      "author": null,
      "title": "UPDATE: State police have 'no reason to believe' Burham has left area - timesobserver.com",
      "description": "Jail escapee Michael Burham is believed to be in the general area of Warren County, according to a Saturday afternoon update from the Pennsylvania State Police. Operational command shifted from the City of Warren police to the Pennsylvania State Police Friday…",
      "url": "https://www.timesobserver.com/news/latest-news/2023/07/update-search-continues-saturday-for-burham/",
      "urlToImage": "https://ogden_images.s3.amazonaws.com/www.timesobserver.com/images/2023/07/07222928/Burham-Presser-667x500.jpg",
      "publishedAt": "2023-07-08T20:50:39Z",
      "content": "Cecile Stelter, public information officer, addresses the media during one of the updates on Friday regarding Michael Burham.\r\nJail escapee Michael Burham is believed to be in the general area of War… [+1286 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "Vox"
      },
      "author": "Ellen Ioanes",
      "title": "What the Dutch government crisis says about immigration - Vox.com",
      "description": "Dutch Prime Minister Mark Rutte’s resignation could be a bellwether for the European Union",
      "url": "https://www.vox.com/world-politics/2023/7/8/23788036/dutch-parliament-migration-european-far-right",
      "urlToImage": "https://cdn.vox-cdn.com/thumbor/TvIWWtXvUHhzB21AmQUUw_dSvIk=/0x547:7630x4542/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24777521/1487730722.jpg",
      "publishedAt": "2023-07-08T20:50:18Z",
      "content": "A bitter divide over immigration policy has brought down Mark Rutte, The Netherlands longest-serving prime minister, demonstrating Europes increasingly polarized debate about how to manage the thousa… [+9952 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "YouTube"
      },
      "author": null,
      "title": "Two new cases of malaria found in Florida - MSNBC",
      "description": "Florida health officials reported two additional cases of malaria. Neither was linked to travel outside the U.S. There have been six reported cases since May...",
      "url": "https://www.youtube.com/watch?v=SMcQGZx82y4",
      "urlToImage": "https://i.ytimg.com/vi/SMcQGZx82y4/maxresdefault.jpg",
      "publishedAt": "2023-07-08T20:30:02Z",
      "content": null
    },
    {
      "source": {
        "id": null,
        "name": "KTRK-TV"
      },
      "author": null,
      "title": "Cyclospora cases: Gastrointestinal illness on the rise in Harris and Fort Bend Counties, health officials say - KTRK-TV",
      "description": "Use caution this summer and wash your produce! Reports are on the rise of a non-life-threatening gastrointestinal illness caused by an intestinal parasite, according to health officials.",
      "url": "https://abc13.com/cyclospora-cases-gastrointestinal-illness-harris-county-health-notice-summer/13478917/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/13478918_070823-ktrk-fort-bend-county-CYCLOSPORA-cases-desi-img.jpg?w=1600",
      "publishedAt": "2023-07-08T19:47:24Z",
      "content": "FORT BEND COUNTY, Texas (KTRK) -- Health officials warn the public to take extra precautions this summer after receiving reports of increased Cyclospora infections within Harris and Fort Bend Countie… [+1643 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "NASASpaceflight.com"
      },
      "author": "Haygen Warren",
      "title": "Using Webb, scientists discover the most distant active supermassive black hole - NASASpaceFlight.com - NASASpaceflight.com",
      "description": "Utilizing the infrared-sensitive instruments of the joint NASA/European Space Agency (ESA)/Canadian Space Agency (CSA) James…",
      "url": "https://www.nasaspaceflight.com/2023/07/webb-ceers1019/",
      "urlToImage": "https://www.nasaspaceflight.com/wp-content/uploads/2023/07/stsci-01gyzapv1xyatx2jt353kjaqbj-1-482x350.png",
      "publishedAt": "2023-07-08T19:40:42Z",
      "content": "11Utilizing the infrared-sensitive instruments of the joint NASA/European Space Agency (ESA)/Canadian Space Agency (CSA) James Webb Space Telescope, a group of scientists has discovered the most dist… [+8926 chars]"
    },
    {
      "source": {
        "id": null,
        "name": "KABC-TV"
      },
      "author": null,
      "title": "VIDEO: San Francisco group placing traffic cones on self-driving cars to disable them - KABC-TV",
      "description": "The Safe Street Rebels, known for advocating for pedestrian safety and public transit usage, are calling their protest the \"Week of Cone.\"",
      "url": "https://abc7.com/san-francisco-driverless-car-cones-sf-robotaxi-waymo-cruise/13478843/",
      "urlToImage": "https://cdn.abcotvs.com/dip/images/13478900_070823-kabc-6a-KGO-self-driving-cones-vid.jpg?w=1600",
      "publishedAt": "2023-07-08T19:32:39Z",
      "content": "SAN FRANCISCO -- A group in San Francisco is going around placing cones on Waymo and Cruise autonomous cars.\r\nMembers of the Safe Street Rebels, a group known for advocating for pedestrian safety and… [+2444 chars]"
    },
    {
      "source": {
        "id": "usa-today",
        "name": "USA Today"
      },
      "author": "Jeanine Santucci",
      "title": "Aviation accident at French Valley Airport: 6 dead in plane crash - USA TODAY",
      "description": "The Cessna business jet crashed near an airport in the city of Murrieta, California, in southwest Riverside County.",
      "url": "https://www.usatoday.com/story/news/nation/2023/07/08/aviation-accident-at-french-valley-airport/70394468007/",
      "urlToImage": "https://www.usatoday.com/gcdn/presto/2023/07/08/USAT/a14f6ffd-4c9c-49f9-8dcb-de06bd828def-AP_Plane_Crash_California.jpg?crop=4220,2374,x0,y214&width=3200&height=1801&format=pjpg&auto=webp",
      "publishedAt": "2023-07-08T17:33:05Z",
      "content": "A plane carrying six people crashed and burst into flames in a Southern California field early Saturday morning, killing everyone on board, officials said.\r\nThe plane was a Cessna C550 business jet, … [+1063 chars]"
    }
  ]
    constructor(){
        super();
        console.log("This is News.js construcctor")
        this.state= {
            articles: this.articles,
            loading: false
        }
    }
  render() {
    return (
      <div className="container my-3">
        <h2>newsdekho - A News App</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItems
              title="this is a title"
              description="this is description"
              imageUrl="https://s.yimg.com/ny/api/res/1.2/Hev_uAJg.90wPq1OEiDqqg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2023-07/8b01c390-1e11-11ee-853d-5c529a0f0559"
              newsUrl="TODO"
            />
          </div>
          <div className="col-md-4">
            <NewsItems
              title="this is a title"
              description="this is description"
            />
          </div>
          <div className="col-md-4">
            <NewsItems
              title="this is a title"
              description="this is description"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default News;
