"use client"

export default myImageLoader = ({src, width, quality}) => {
return `https://arifbashak-portfolio-with-next-7n30hoioc-arif-basha-ks-projects.vercel.app/${src}?w=${width}&q=${quality} || 75`
}