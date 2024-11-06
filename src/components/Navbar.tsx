import localFont from 'next/font/local';

const tinyFont = localFont({ src: "../app/fonts/Kanit-Bold.ttf" })

export default function Navbar() {
  return (
    <div className="flex items-center justify-center">
      <div className="p-4 m-2 bg-zinc-800 w-9/12 rounded-lg">
        <h1 className={`${tinyFont.className} text-4xl text-center`}>Radio Javan Downloader</h1>
      </div>
    </div>
  )
}