##Update R version
install.packages("installr")
library(installr)

updateR()


##Installing libraries
install.packages("rtweet",dependencies = T)
install.packages("dplyr",dependencies = T)
install.packages("tidyr",dependencies = T)
install.packages("tidytext",dependencies = T)
install.packages("magrittr", dependencies = T)
install.packages("ggplot2",dependencies=TRUE)
install.packages("ggExtra",dependencies=TRUE)
install.packages("purrr", dependencies = T)
install.packages("tibble", dependencies = T)
install.packages("rvest", dependencies = T)
install.packages("ptstem",dependencies = T)
install.packages("wordcloud2",dependencies = T)
install.packages("RPostgreSQL")
install.packages("httr")

libraries <- function()
{
  library(ggplot2)
  library(ggExtra)
  library(rtweet)
  library(dplyr)
  library(tidyr)
  library(tidytext)
  library(magrittr)
  library(textdata)
  library(purrr)
  library(tibble)
  library(twitteR)
  library(tidyverse)
  library(data.table)
  library(tidytext)
  library(glue)
  library(stringr)
  library(stringi)
  library(rvest)
  library(readr)
  #library(ptstem)
  library(wordcloud2)
  library(tm)
  
  #Database
  library(DBI)
  library(RODBC)
  library(odbc)
  library(RPostgreSQL)
  
  #http requests
  library(httr)
  
  }

libraries()


#Get data from NODE with http request
req <- GET("http://localhost:3333/params")
requestBody <- content(req)
atributte <- requestBody["parameter"]
valueSearch <- toString(atributte)


#Conection with database


##DATABASE CONNECTION 
## API KEYS


##setwd("C:/Users/Star/Documents/TCC/")

##Backup plan
##createTokenNoBrowser<- function(appName, consumerKey, consumerSecret, 
##                              accessToken, accessTokenSecret) {
##app <- httr::oauth_app(appName, consumerKey, consumerSecret)
##params <- list(as_header = TRUE)
##credentials <- list(oauth_token = accessToken, 
##                    oauth_token_secret = accessTokenSecret)
##token <- httr::Token1.0$new(endpoint = NULL, params = params, 
##                            app = app, credentials = credentials)
##return(token)
##}
##Function to create token (not working)
creatingToken <- function(appName, consumerKey, consumerSecret,accessToken,accesSecret)
{
  token<-get_token()
  token
  if(is.null(token))
  {
    tokenNew <- create_token(app = appName,
                             consumer_key = consumerKey,
                             consumer_secret = consumerSecret,
                             access_token = accessToken,
                             access_secret = accessSecret)
    tokenNew
    return(tokenNew)
  }
  else
  {
    token <- get_token()
    token
    return(token)
  }
  
}

##token<-creatingToken(apiKeys[["appName"]],apiKeys[["consumerKey"]],apiKeys[["consumerSecret"]],
##                       apiKeys[["accessToken"]],apiKeys[["accessSecret"]])

##Creating Token (working)
tokenA<-create_token(app = apiKeys[["appName"]],
                     consumer_key = apiKeys[["consumerKey"]],
                     consumer_secret = apiKeys[["consumerSecret"]],
                     access_token = apiKeys[["accessToken"]],
                     access_secret = apiKeys[["accessSecret"]])

##Getting token (working)
tokenA<-get_token()


##brazil_coord <- lookup_coords(address = 'brazil',components = 'country:Brazil',apikey = apiKeys[["geomaps"]])
##scotland_coord <- lookup_coords(address = "scotland",components = "country:Scotland",apikey = geomaps)

##Function to search tweets
country1 <- search_tweets(q = {valueSearch}, n = 100, include_rts = FALSE,token = tokenA)
country1 <- stream_tweets(q={valueSearch}, token = token)
#country2 <- search_tweets(q = "minecraft", n = 100, include_rts = FALSE,token = token)

##Stream tweets for 30 seconds default
##
##Selecting only screen_name and text
tweets.Country1 = country1 %>% select(screen_name,text)
tweets.Country2 = country2 %>% select(screen_name,text)
##tweets.Country1
##tweets.Country2

#Most relevant
head(tweets.Country1$text)

#Removing http elements
tweets.Country1$stripped_text1 <- gsub("http\\S+","",tweets.Country1$text)

#Use the unnest_tokens() to convert to lowercase and remove punctuation, and add ID
tweets.Country1_stem <- tweets.Country1 %>% select(stripped_text1)%>%unnest_tokens(word,stripped_text1)

##head(tweets.Country1_stem)
#Remove stop words from list of words
cleaned_tweets.Country1 <- tweets.Country1_stem %>% anti_join(stop_words)
##head(cleaned_tweets.Country1)

##head(tweets.Country1$text)

#Removing http elements
tweets.Country2$stripped_text2 <- gsub("http\\S+","",tweets.Country2$text)

#Use the unnest_tokens() to convert to lowercase and remove punctuation, and add ID
tweets.Country2_stem <- tweets.Country2 %>% select(stripped_text2)%>%unnest_tokens(word,stripped_text2)

##head(tweets.Country2_stem)
#Remove stop words from list of words
cleaned_tweets.Country2 <- tweets.Country2_stem %>% anti_join(stop_words)
##head(cleaned_tweets.Country2)

##head(tweets.Country2$text)

#Top 10 Tweets in country1 tweets
cleaned_tweets.Country1 %>% count(word,sort = TRUE)%>%
  top_n(10)%>%
  mutate(word = reorder(word,n))%>%
  ggplot(aes(x=word,y=n))+geom_col()+xlab(NULL)+coord_flip()+theme_classic()+
  labs(x="Count",y="Unique Words",title = "Unique words found in country1 tweets")

#Top 10 Tweets in country2 tweets
cleaned_tweets.Country2 %>% count(word,sort = TRUE)%>%
  top_n(10)%>%
  mutate(word = reorder(word,n))%>%
  ggplot(aes(x=word,y=n))+geom_col()+xlab(NULL)+coord_flip()+theme_classic()+
  labs(x="Count",y="Unique Words",title = "Unique words found in country2 tweets")

##Bing Senment Analaysis

##Joining by word, sentiment and sorting from most to least
bing_country1 = cleaned_tweets.Country1 %>% 
  inner_join(get_sentiments("bing")) %>%
  count(word,sentiment,sort = TRUE) %>%
  ungroup()
##Grouping by the top n words and showing as negative/positive
bing_country1 %>% group_by(sentiment)%>%
  top_n(10)%>%
  ungroup()%>%
  mutate(word = reorder(word,n)) %>%
  ggplot(aes(word,n,fill = sentiment)) +
  geom_col(show.legend = FALSE) + 
  facet_wrap(~sentiment,scales = "free_y") + 
  labs(title = "Tweets containing 'search1'", y = "Contribution to sentiment", x = NULL) + 
  coord_flip() + theme_bw()

##bing_country1$sentiment 

##Sum negative and positive 
negativeCount <- sum(str_count(bing_country1$sentiment,"negative"))
positiveCount <- sum(str_count(bing_country1$sentiment,"positive"))

valueWord <- bing_country1$word[1]
##bing_country1$n

##Bing sentiment 2

##Same as join country1
bing_country2 = cleaned_tweets.Country2 %>% 
  inner_join(get_sentiments("bing")) %>%
  count(word,sentiment,sort = TRUE) %>%
  ungroup()
##bing_country2
##Same as group in country1
bing_country2 %>% group_by(sentiment)%>%
  top_n(10)%>%
  ungroup()%>%
  mutate(word = reorder(word,n)) %>%
  ggplot(aes(word,n,fill = sentiment)) +
  geom_col(show.legend = FALSE) + 
  facet_wrap(~sentiment,scales = "free_y") + 
  labs(title = "Tweets containing search2", y = "Contribution to sentiment", x = NULL) + 
  coord_flip() + theme_bw()


##Inset values into database

randomId <- sample(1:1000, 1, replace=TRUE)

#Create query
query <- 'INSERT INTO "Searchs"
(id, "searchName","principalWord",positives,negatives)'
values <- str_glue("VALUES 
('{randomId}','{valueSearch}', '{valueWord}', '{positiveCount}', '{negativeCount}' )")
 
total <- paste(query,values)

#Insert data
rs <- dbSendStatement(con, total)

#Select data
selectData <- dbGetQuery(con, 'SELECT "searchName" FROM "Searchs"')


