# GEOG 458 Final Project
## Meme Squad
### Team Members
- Yulong Tan
- Kuo Hong
- Eddie Tomayo
- Xiaolun

We are working with trending Twitter hashtags and we're going to use their geolocations to map them. We will see where some trending hashtags are tweeted from.

#### Installation
Run `npm install` in the main directory, because our JavaScript uses some packages. There are some `node_modules` required for the JavaScript to run.

#### Google Docs Write-up
- [Google Doc writeup](https://docs.google.com/document/d/1GbBqokRIutAYC1biIkgXLhrthZALOeJNJbqzNvKsB4Q/edit?usp=sharing)

#### Mapbox Maps
- [Mass Shooting Map](https://api.mapbox.com/styles/v1/kuo22/cjem6gq4h5oiw2rqja62z2ikh.html?fresh=true&title=true&access_token=pk.eyJ1Ijoia3VvMjIiLCJhIjoiY2pkeTY1M3c0MHduejJxbzE3NjZmdzhsNyJ9.UMETNS3SPlCrY2BmmIHQGA#4.0/37.723860/-96.790832/0)
- [Population Density](https://api.mapbox.com/styles/v1/andygong/cjenax9x26mj42smslqzk4hkr.html?fresh=true&title=true&access_token=pk.eyJ1IjoiYW5keWdvbmciLCJhIjoiY2plMGM1Yjg1M2VkbzJ3bXU4ajFwb3JtNSJ9.v-Uh1-UPheKrVB5kW0HryA#4.3/39/-98.34)
- [Tweet Distribution](https://api.mapbox.com/styles/v1/andygong/cjena8j1v2z0l2spkew9gis3u.html?fresh=true&title=true&access_token=pk.eyJ1IjoiYW5keWdvbmciLCJhIjoiY2plMGM1Yjg1M2VkbzJ3bXU4ajFwb3JtNSJ9.v-Uh1-UPheKrVB5kW0HryA#4.15/37.84/-97.18)
- [Story Map](http://uw-geog.maps.arcgis.com/apps/Cascade/index.html?appid=8188c889235d407799464a42576a7696)
- [Grid Map](http://students.washington.edu/swifties/meme-squad/gridmap.html)

#### Data 
- [Mass Shooting data](http://www.gunviolencearchive.org/reports/mass-shooting)
- [Population data](https://www.census.gov/geo/maps-data/data/tiger-data.html)
- [Tweepy Library for tweets](http://www.tweepy.org/)


![Mass Shooting data](/images/shooting_map.png)
Mass shooting: This map shows the occurrence of mass shootings in 2018 in the US.  Despite the fact that it's only the third month of 2018 there have been over hundreds of casualties throughout the US.  The fact that majority of the mass shootings have been situated in the eastern US may have some relation to the difference in legal policies between regions.

![Twitter heatmap](/images/twitter_heatmap.png)
Heatmap: This map shows how NRA-related tweets are prevalent in densely populated areas.  It also shows that the eastern US has a much more disperse distribution of tweets compared to the west, which only mostly have clusters in the Seattle and California region.
