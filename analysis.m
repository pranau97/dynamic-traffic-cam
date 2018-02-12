endDate = datetime('07/01/2017', 'InputFormat', 'MM/dd/yyyy');
startDate = datetime('07/01/2017', 'InputFormat', 'MM/dd/yyyy');
dateVector = startDate: endDate;
alltrafficData = [];
timestamp = [];

for dayCount = 1:length(dateVector)-1
   dateRange = [dateVector(dayCount), dateVector(dayCount+1)];
   [channelData, t] = thingSpeakRead(266885,'ReadKey','BDNY7M8DEC6BJB8K','Fields',1, 'DateRange', dateRange);
   [alltrafficData] = [alltrafficData; channelData ];
   [timestamp] = [timestamp; t];
end
figure

plot(timestamp, alltrafficData)
datetick
xlabel('time')
ylabel('Vehicle Density')
grid on
hold on
alltrafficData1 = [];
timestamp = [];
for dayCount = 1:length(dateVector)-1
   dateRange = [dateVector(dayCount), dateVector(dayCount+1)];
   [channelData, t] = thingSpeakRead(266885,'ReadKey','BDNY7M8DEC6BJB8K','Fields',2, 'DateRange', dateRange);
   [alltrafficData1] = [alltrafficData1; channelData ];
   [timestamp] = [timestamp; t];
end
plot(timestamp, alltrafficData1)
datetick
xlabel('time')
ylabel('Vehicle Density')
grid on
hold on
alltrafficData2 = [];
timestamp = [];
for dayCount = 1:length(dateVector)-1
   dateRange = [dateVector(dayCount), dateVector(dayCount+1)];
   [channelData, t] = thingSpeakRead(266885,'ReadKey','BDNY7M8DEC6BJB8K','Fields',3, 'DateRange', dateRange);
   [alltrafficData2] = [alltrafficData2; channelData ];
   [timestamp] = [timestamp; t];
end
plot(timestamp, alltrafficData2)
datetick
xlabel('time')
ylabel('Vehicle Density')
grid on
hold on
alltrafficData3 = [];
timestamp = [];
for dayCount = 1:length(dateVector)-1
   dateRange = [dateVector(dayCount), dateVector(dayCount+1)];
   [channelData, t] = thingSpeakRead(266885,'ReadKey','BDNY7M8DEC6BJB8K','Fields',4, 'DateRange', dateRange);
   [alltrafficData3] = [alltrafficData3; channelData ];
   [timestamp] = [timestamp; t];
end
plot(timestamp, alltrafficData3)
datetick
xlabel('time')
ylabel('Vehicle Density')
grid on
title('Traffic Volume for July 1')
