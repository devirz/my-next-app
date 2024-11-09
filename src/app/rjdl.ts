import axios from "axios"
import { load } from "cheerio"

const host = "https://host2.rj-mw1.com/media/"

function shortenBytes(n: number) {
  const k = n > 0 ? Math.floor((Math.log2(n)/10)) : 0
  const count = Math.floor(n / Math.pow(1024, k))
  return count
}

// const instance = axios.create({
//   timeout: 5000,
//   headers: {
//     "Access-Control-Allow-Credentials": "true",
//     "Access-Control-Allow-Origin": "https://rjdl-nexts-rn6j9v7au-devirzs-projects.vercel.app",
//     "Access-Control-Allow-Methods": "GET,DELETE,PATCH,POST,PUT",
//     "Access-Control-Allow-Headers": "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
//   }
// })

const rjdl = async (url: string) => {
  const type = url.includes("rj.app/m/") ? "mp3/" : "podcast/"
  const result = await axios.get(url)
  const $ = load(result.data)
  const link = $("#__NEXT_DATA__")
  const datas = JSON.parse(link.text())
  // console.log(datas.props.pageProps)
  const { pageProps: { media: d } } = datas.props
  // console.log(d)
  const src = host + type + d.permlink + ".mp3"
  // console.log(src)
  const res = await axios.get(d.link)
  const size = shortenBytes(res.headers["content-length"])
  // const newSrc = Number.isNaN(size) ? d.link : src
  // const destRes = await get(newSrc)
  return {
    title: d.title,
    photo: d.photo,
    artist: d.artist || d.podcast_artist,
    song: d.song || d.title,
    plays: d.plays,
    likes: d.likes,
    src: d.link,
    size: size,
    date: d.date_added || d.date
  }
}
export default rjdl