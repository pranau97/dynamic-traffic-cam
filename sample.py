import cv2
import numpy as np
from matplotlib import pyplot as plt

ref_img = cv2.imread('/home/pranau/reference1.jpg', 0)
ref_img = cv2.resize(ref_img, (400, 300))
ref_edges = cv2.Canny(ref_img, 100, 200)
cv2.imshow('img',ref_edges)
cv2.waitKey(0)
cv2.destroyAllWindows()
img = cv2.imread('/home/pranau/sample5.jpg', 0)
img = cv2.resize(img, (400,300))
edges = cv2.Canny(img, 100, 200)

cv2.imshow('ref',edges)
cv2.waitKey(0)
cv2.destroyAllWindows()

def get_match_percent():
	height, width = ref_edges.shape
	whites = 0
	matches = 0

	for i in range(0, height):
		for j in range(0, width):
			if ref_edges[i, j] == 255:
				whites = whites + 1
			if (ref_edges[i, j] == 255) and edges[i, j] == 255:
				matches = matches + 1

	match_percent = (matches/whites)*100
	return match_percent

get_match_percent()
