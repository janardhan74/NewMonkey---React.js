import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News (props) {
  console.log("working ",props)
  const [articles, setArticles] = useState([]);
  const [page , setPage] = useState(true);
  const [totalArtcles , setTotalArticles] = useState(0);
  const [loading , setLoading] = useState(true);

  /*

  // constructor() {
  //   super();
  //   this.state = {
  //     articles: [],
  //     page: 1,
  //     totalArtcles: 0,
  //   };

  //   this.fetchMoreData = this.fetchMoreData.bind(this);
  // }

  // async componentDidMount() {
  //   // it is a life cycle method it runs after the rnder method
  //   await this.setState({
  //     loading: true,
  //   });
  //   // console.log(this.state);
  //   this.updateNews();

  //   await this.setState({
  //     loading: false,
  //   });
  // }
  */

  useEffect(() => { // it is guaranteed that it runs atleast once after the code is mounted and when the depenency array is empty
      updateNews(page)
      document.title = "NewsMonkey - "+props.category
  }, []);

  
async function updateNews(cpage) { //*** temporary fix */
    props.setProgress(20);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&pagesize=${props.pageSize}&page=${cpage}`;
    console.log(url);
    let data = await fetch(url);
    props.setProgress(60);
    let parsedData = await data.json();
    // console.log(parsedData)
    // await this.setState({
    //   articles: this.state.articles.concat(parsedData.articles),
    //   totalArtcles: parsedData.totalResults,
    // });
    await setArticles(articles.concat(parsedData.articles))
    await setTotalArticles(parsedData.totalResults)
    await setLoading(false)
    props.setProgress(100);

    // console.log(this.state);
  }

  // async function handleClick(val) {
  //   await setPage(page+1)
  //   await updateNews(page);
  // }

  async function fetchMoreData() {
    console.log("More data fetched");

    // this.setState((prevState)=>({
    //   page : prevState.page+1
    // }) , ()=>{
    //   console.log(this.state)
    //   let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=3cbdee7cc20f42459638cfe0fde36b3e&pagesize=${this.props.pageSize}&page=${this.state.page}`;
    //   fetch(url).then(data => data.json()).then(parsedData => {
    //     this.setState({
    //       articles : this.state.articles.concat(parsedData.articles)
    //     })
    //   })
    // })

    // this.setState(
    //   (prevState) => ({
    //     page: prevState.page + 1,
    //   }),
    //   () => {
    //     this.updateNews();
    //   }
    // );

    await setPage(page+1);
    await updateNews(page+1);
  }

  //   handlePrevClick = async () => {
  //     await this.setState({
  //       articles: [],
  //       page: this.state.page - 1,
  //     });

  //     await this.componentDidMount();
  //   };

    // let arr = [1,2,3,4,5,6]
    // console.log(arr.map((element)=>{return element*2}))
    // map return array -> contains element of original array where function passed to applied for each element
    // console.log("render")
    return (
      <div className="container">
        <h2 className="text-center" style={{ margin: "70px 0px 30px 0px" }}>
          NewsMonkey - Top {props.category} Headlines
        </h2>
        {/* {this.state.loading && <Loader />} */}
        {/* {[<p>Janan</p> , <p>Lokesh</p> , <p>Sweety</p> , <p>Darling</p>]}  */}
        {/* to see how the below code works uncomment and see the above code  */}
        <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length < totalArtcles}
          loader={<Loader />}
        >
          <div>
            <div className="row" style={{ margin: "0px 0px" }}>
              {articles.map((element) => {
                return (
                  <div className="col-md-4 my-1" key={element.url}>
                    <NewsItem
                      title={!element.title ? "" : element.title}
                      description={
                        !element.description
                          ? ""
                          : element.description.slice(0, 80)
                      }
                      imageURL={element.urlToImage}
                      newsURL={element.url}
                      date={element.publishedAt}
                      author={element.author}
                      source={element.source.id}
                    />
                  </div>
                );
              })}

              {/* <div className='col-md-4 my-3'>
                    <NewsItem title={"my title"} description={"my description"} imageURL={"https://ichef.bbci.co.uk/news/1024/branded_news/10B62/production/_133205486_capture.png"} newsURL={"TODO"}/>
                </div> */}
            </div>
          </div>
        </InfiniteScroll>

        {/* <div className="container d-flex justify-content-evenly">
          <button
            type="button"
            disabled={this.state.page <= 1}
            onClick={()=>{this.handleClick(-1)}}
            className="btn btn-dark"
          >
            &larr;Previous
          </button>
          <button
            type="button"
            disabled={
              Math.ceil(this.state.totalArtcles / this.props.pageSize) ===
              this.state.page
            }
            onClick={()=>{this.handleClick(+1)}}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div> */}
      </div>
    );
}
