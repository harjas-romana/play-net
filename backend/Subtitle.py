import pysrt

def extract_subtitles(srt_file):
    subs = pysrt.open(srt_file)
    return " ".join([sub.text for sub in subs])


subtitles_text = extract_subtitles('Subtitles.srt')