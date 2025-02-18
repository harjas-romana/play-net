from transformers import pipeline

classifier = pipeline("sentiment-analysis", model="nlptown/bert-base-multilingual-uncased-sentiment")

def sentiment_analysis(text):

    result = classifier(text)
    return result[0]['label']

emotion_category = sentiment_analysis(subtitles_text)
print("Video Emotion: ", emotion_category)
