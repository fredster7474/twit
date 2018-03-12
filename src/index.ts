import * as Twit from 'twit'

const twit = new Twit({
  consumer_key:         'I5TFiwot2mhZAewL11wauMLSl',
  consumer_secret:      'pS4XQcbfvjIMyVRlERrPYMJICsHKV0ZfCZW1VebqCFHnAvUhzg',
  access_token:         '863335407362158596-PfixfMsxaGCmeJjnlQvBA755Qe6Y7R4',
  access_token_secret:  'RHk4nXvZCQJKODFQ148fi36KQ5pxrTuA4WO7rZt0ASOvQ'
})

const fn = async () => {
  const tweets = await twit.get('search/tweets', {q:'@super_fake_cat'})
  console.log(tweets.data.statuses)

  function sleep (time: number) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }

  while (true) {
  	console.log('hello!')
  	await sleep(5000)
  }
}
fn()
